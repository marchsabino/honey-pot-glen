import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

function YoutubeLink({ ...props }) {
  return (
    <a
      className="hover:text-red-500 transition duration-300"
      href={process.env.NEXT_PUBLIC_SITE_YOUTUBE}
      target="_blank"
    >
      <FontAwesomeIcon className={props.className} icon={faYoutube} />
    </a>
  );
}

export default YoutubeLink;
