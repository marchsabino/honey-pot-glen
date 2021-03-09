import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

function TwitterLink({ ...props }) {
  return (
    <a
      className={`hover:text-blue-400 transition duration-300 ${props.className}`}
      href={process.env.NEXT_PUBLIC_SITE_TWITTER}
      target="_blank"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  );
}

export default TwitterLink;
