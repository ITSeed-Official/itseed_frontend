import Head from "next/head";
import type { NextPage } from "next";

export interface Meta {
  title: string;
  description: string;
  og_title: string;
  og_description: string;
  og_url: string;
  og_image: string;
}

const PageMeta = (Page: NextPage) => {
  const PageHead = ({
    title,
    description,
    og_title,
    og_description,
    og_url,
    og_image,
  }: Meta) => {
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={og_title} />
          <meta property="og:description" content={og_description} />
          <meta property="og:url" content={og_url} />
          <meta property="og:image" content={og_image} />
        </Head>
        <Page />
      </>
    );
  };

  PageHead.displayName = "head";

  return PageHead;
};

export default PageMeta;
