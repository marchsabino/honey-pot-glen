import Head from "next/head";

function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME} - Home</title>
      </Head>
      <h1>Hello World!</h1>
    </>
  );
}

export default Home;
