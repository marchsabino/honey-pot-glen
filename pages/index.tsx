import Head from "next/head"

/**
 * The Homepage Component for Honey Pot Glen.
 * 
 * @returns the homepage component
 */
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
