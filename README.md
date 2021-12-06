### Setup

1. Copy `.env.example` in the project root to `.env.development / .env.production` and edit your preferences.

```dotenv
SITE_URL=http://localhost:8000
WP_GRAPHQL_URL=https://wordpress/wp/graphql
```

2. install dependencies

```shell
yarn
```

3. create Flexible.tsx in imports

```shell
cd src/components/imports
touch Flexible.tsx
```

4. Add content to Flexible.tsx

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

5. Create page.tsx in templates

```shell
cd src/templates
touch page.tsx
```

6. Add content to page.tsx

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

7. Copy/Paste the content to gatsby-node.js

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

### Create a component

!Important!
Add theme to your wordpress setup

1. Go to the acf folder and create a new Flexible content block.

```sh
  cd cms/acf
  touch block-name.php
```

3. Add this template to the file

```php
<?php
require_once('utils/graphql-label.php');
require_once('utils/to-snake-case.php');

$label = 'Block name'; // ⬅️ Rename me

// ⬇️ Rename me
$block_name = [
  'key' => toSnakeCase($label),
  'name' => toSnakeCase($label),
  'label' => $label,
  'sub_fields' => [
    graphql_label($label), // Creates the label for gatsby component = BlockName
    // Fields go here e.g.
    // [
    //   'key' => $label . 'header',
    //   'label' => 'Header',
    //   'name' => 'header',
    //   'type' => 'text',
    // ],
  ],
];
```

4. Add the block to blocks.php

```sh
  cd ..
  code blocks.php
```

```php
<?php

require_once('acf/block-name.php');

$blocks = [
  $block_name,
];
```

5. Create Gatsby component

```shell
cd src/components/layout-block

mkdir BlockName

cd BlockName

touch index.ts
touch BlockName.tsx
touch BlockName.data.ts
touch BlockName.styled.ts
```

6. Add content to index.ts

```TypeScript
export { default } from "./BlockName";
```

7. Add content to BlockName.tsx

```TypeScript
import * as React from "react";

import S from "./H1.styled";

interface BlockName {
  // header: string;
}

const BlockName: React.FC<BlockName> = (data: BlockName) => {
  return <S.BlockName></S.BlockName>;
};

export default BlockName;
```

8. Add content to BlockName.data.ts

```TypeScript
module.exports = () => `
 // header
`;
```

9. Add content to BlockName.styled.ts

```TypeScript
import styled from "styled-components";

const BlockName = styled.div``;

const S = {
  BlockName
}

export default S;
```

9. Add BlockName component to Flexible.tsx

```TypeScript
import * as React from 'react';

import BlockName from '@/components/layout-blocks/BlockName'; // ⬅️

export enum BlockType {
  BlockName // ⬅️
}

export interface IComponent {
  label: BlockType;
}

export type IComponentTypes = typeof BlockName; // ⬅️

export type IFlexible = {
  components: ReadonlyArray<IComponent>;
};

const BlockComponents: {
  [C in BlockType]: IComponentTypes;
} = {
  [BlockType.BlockName]: BlockName // ⬅️
};

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

### Run

!Important!
Create a component before running yarn start

```shell
yarn start
```

###### Gatsby site

[localhost](http://localhost:8000) in your browser

###### GraphQL data

[graphql](http://localhost:8000/___graphql) in your browser
