import Navbar from "./Navbar/Navbar";
import Logo from "../common/Logo";
import { socialNetworks, app } from "../../portfolio";
import AppHelmet from "../common/AppHelmet";
import githubLogo from "../../assets/logos/icons8-github-24.png";

function Header() {
  return (
    <header className="site-header">
      <AppHelmet app={app} />
      <div className="site-container">
        <div className="header-inner">
          <Logo />
          <ul className="social-networks spin-icon">
            <li>
              <a
                href={socialNetworks.github}
                className="social-network-link-img"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} alt="GitHub" />
              </a>
            </li>
            <Navbar />
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
