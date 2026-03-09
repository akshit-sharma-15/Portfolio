export const SocialLink = ({ href, logo, alt }) => (
  <li>
    <a href={href} className="social-network-link-img" target="_blank" rel="noopener noreferrer">
      <img src={logo} alt={alt} />
    </a>
  </li>
);
