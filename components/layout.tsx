import Head from "next/head";
import TwitterLink from "./social-media/twitter-link";
import InstagramLink from "./social-media/instagram-link";
import YoutubeLink from "./social-media/youtube-link";

function Layout({ children, name }) {
  return (
    <>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_SITE_NAME} - {name}
        </title>
      </Head>
      <div className="flex flex-col h-screen">
        <nav className="py-3 mb-5 bg-gray-700">
          <div className="container flex justify-between text-md">
            <span className="font-semibold text-gray-200">
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </span>
            <div id="social-media-links" className="text-gray-400">
              <InstagramLink className="mr-2" />
              <TwitterLink className="mr-2" />
              <YoutubeLink />
            </div>
          </div>
        </nav>
        {children}
      </div>
    </>
  );
}

export default Layout;
