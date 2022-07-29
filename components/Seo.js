import Head from "next/head";
export default function Seo() {
  return (
    <>
      <Head>
        <title>green apple</title>
        <meta name="author" content="0xgreenapple" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="home" key="ogtitle" />
        <meta
          property="og:description"
          content="average green apple enjoyer!"
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://greenapple.one/images/preview.png"
          key="ogimg"
        />
      </Head>
    </>
  );
}
