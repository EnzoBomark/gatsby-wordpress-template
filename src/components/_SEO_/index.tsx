import * as React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  description?: string;
  title: string;
  author?: string;
  lang?: string;
  meta?: Array<{ name: string; content: string }>;
}

const Seo: React.FC<SEOProps> = ({
  description = "",
  title = "",
  author = "",
  lang = "en",
  meta = [],
}: SEOProps) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  );
};

export default Seo;
