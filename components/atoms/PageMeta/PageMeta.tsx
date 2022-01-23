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

const PageMeta = (Page: NextPage<any>) => {
  const PageHead = (props: any) => {
    const { meta } = props;

    return (
      <>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta property="og:title" content={meta.og_title} />
          <meta property="og:description" content={meta.og_description} />
          <meta property="og:url" content={meta.og_url} />
          <meta property="og:image" content={meta.og_image} />
        </Head>
        <Page {...props} />
      </>
    );
  };

  PageHead.displayName = "head";

  return PageHead;
};

export default PageMeta;
