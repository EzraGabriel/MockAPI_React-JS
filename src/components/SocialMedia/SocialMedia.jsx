import { socialMedias } from "../../data/socialMedias";
import "./SocialMedia.css";
function SocialMedia() {
  return (
    <div className="social-media">
      {socialMedias.map((social) => (
        <a
          key={social.id}
          href={social.link}
          className="social-media-item"
          aria-label={social.name}
        >
          <img src={social.icon} alt="" />
        </a>
      ))}
    </div>
  );
}

export default SocialMedia;
