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

      <nav className="fixed w-full top-0 py-3 bg-gray-700">
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
      <div className="mt-16">{children}</div>
    </>
  );
}

export default Layout;
