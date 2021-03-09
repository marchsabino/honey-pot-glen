import Layout from "../components/layout";

function Home(): JSX.Element {
  return (
    <Layout name="Home">
      <main>
        <div className="container max-w-screen-lg">
          <div className="text-center text-green-800 bg-green-50 p-2 border-green-200 border">
            <strong>Notice:</strong> This website is currently growing 🌱
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 my-5">
            <img
              className="max-h-96"
              width="100%"
              src="https://carlyriordan.com/wp-content/uploads/2021/01/Carly-Riordan-1-1.jpg"
            />
            <img
              className="hidden sm:block"
              src="https://carlyriordan.com/wp-content/uploads/2021/01/Carly-Riordan-3-scaled-1.jpg"
            />
            <img
              className="hidden sm:block"
              src="https://carlyriordan.com/wp-content/uploads/2021/01/Tuckernuck-Charlotte-Dress-1.jpg"
            />
          </div>

          <div className="p-3 mb-10 border-2 border-gray-100">
            <h1 className="text-lg font-semibold">Hello World! 👋</h1>
            <div>
              <img
                height="16px"
                width="16px"
                className="rounded-full inline-block mr-1"
                src="https://carlyriordan.com/wp-content/uploads/2021/01/Tuckernuck-Charlotte-Dress-1.jpg"
              />
              <span className="text-sm text-gray-400">
                March 09, 2021 by Angela Sabino
              </span>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ut convallis neque, ut laoreet magna. Pellentesque ut
              leo orci. Praesent nec elit sapien. In rhoncus luctus sapien id
              elementum. Nam elementum magna non nisi laoreet, fermentum rutrum
              sapien finibus. Vivamus dictum non ante ac venenatis. Praesent
              suscipit enim a leo laoreet porta. Mauris id lectus pharetra,
              tincidunt mi ut, rutrum massa. Vestibulum suscipit posuere urna et
              posuere. Fusce congue dolor interdum ligula elementum, quis
              imperdiet dolor malesuada. Nulla pretium rutrum lacus, in dapibus
              eros molestie eget. Suspendisse ornare lectus est, sit amet
              posuere lorem suscipit id. Aliquam ut urna consequat, condimentum
              mauris eget, interdum ex. Quisque augue lacus, egestas sed dapibus
              vel, maximus et mauris. Morbi ut vulputate tortor.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Home;
