### Setup

Copy `.env.example` in the project root to `.env.development / .env.production` and edit your preferences.

```dotenv
SITE_URL=http://localhost:8000
WP_GRAPHQL_URL=https://wordpress/wp/graphql
```

### Install

```shell
yarn
```

```TypeScript

import * as React from 'react';

export enum BlockType {}

export interface IComponent {
  label: BlockType;
}

export type IComponentTypes = {};

export type IFlexible = {
  components: ReadonlyArray<IComponent>;
};

const BlockComponents: {
  [C in BlockType]: IComponentTypes;
} = {};

const Flexible: React.FC<IFlexible> = ({ components }) => {
  return (
    <>
      {components?.map((comp, index) => {
        const Component = BlockComponents[BlockType[comp.label]];

        return <Component key={index} {...comp} />;
      })}
    </>
  );
};

export default Flexible;

```

```TypeScript

import * as React from "react";
import { ThemeProvider } from "styled-components";

import Seo from "@/components/_SEO_";
import Body from "@/components/core-blocks/Body";
import Main from "@/components/core-blocks/Main";
import Flexible, { IComponent } from "@/components/imports/Flexible";
import GlobalStyle from "@/styles/global";
import defaultTheme from "@/styles/themes/default.theme";

export type IPageContext = {
  pageContext: {
    page: {
      components: ReadonlyArray<IComponent>;
    };
    seo: {
      focuskw: string;
      metaDesc: string;
      opengraphAuthor: string;
      opengraphTitle: string;
    };
  };
};

const PageTemplate: React.FC<IPageContext> = ({
  pageContext: { page, seo },
}: IPageContext) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Body>
        <Main>
          <Seo
            title={seo.opengraphTitle}
            description={seo.metaDesc}
            author={seo.opengraphAuthor}
          />
          <Flexible components={page.components} />
        </Main>
      </Body>
    </ThemeProvider>
  );
};

export default PageTemplate;

```

```JavaScript

const path = require("path");

const fetchPages = require("./node/fetch-pages");

// Fetch and generate corresponding pages w/ component imports
module.exports.createPages = async (gatsbyUtilities) => {
  // Fetch all pages graphql data.
  const pagesData = await fetchPages(gatsbyUtilities);

  // Build out gatsby pages
  const promise = await pagesData.map(async (page) => {
    // create gatsby page out of the template file
    return gatsbyUtilities.actions.createPage({
      path: page.uri,
      component: path.resolve(`./src/templates/page.tsx`),
      context: {
        ...page,
      },
    });
  });

  await Promise.all(promise);
};


```

### Run

```shell
yarn start
```

###### Gatsby site

[localhost](http://localhost:8000) in your browser

###### GraphQL data

[graphql](http://localhost:8000/___graphql) in your browser
