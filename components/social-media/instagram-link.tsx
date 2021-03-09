import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function InstagramLink({ ...props }) {
  return (
    <a
      className={`hover:text-purple-400 transition duration-300 ${props.className}`}
      href={process.env.NEXT_PUBLIC_SITE_INSTAGRAM}
      target="_blank"
    >
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  );
}

export default InstagramLink;
