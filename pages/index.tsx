import Layout from "../components/layout";

function Home(): JSX.Element {
  return (
    <Layout name="Home">
      <main className="my-10">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <div className="text-center text-green-800 bg-green-50 p-2 rounded border-green-200 border">
              <strong>Notice:</strong> This website is currently growing 🌱
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
