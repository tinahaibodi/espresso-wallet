import Head from "next/head";
import { useRouter } from "next/router";

export const PageSEO = ({
  ogTitle,
  ogDescription,
  ogImage,
}: {
  ogTitle: string;
  ogDescription: string;
  ogImage?: string;
}) => {
  const router = useRouter();

  return (
    <Head>
      <title>{ogTitle}</title>
      <meta name="robots" content="follow, index" />
      <meta content={ogDescription} name="description" />
      {/* <meta
          property="og:url"
          content={`https://YOUR WEBSITE URL.com${router.asPath}`}
        /> */}
      <meta property="og:type" content={"website"} />
      <meta property="og:site_name" content="Espresso Systems" />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogTitle} />
      <meta name="twitter:card" content={ogImage} />
      {/* <meta name="twitter:site" content="@YOUR TWITTER HANDLE" /> */}
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
};
