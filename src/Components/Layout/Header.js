import React from "react";
import Navbar from "./Navbar/Navbar";
import Logo from "../common/Logo";
import { socialNetworks, app } from "../../portfolio";
import AppHelmet from "../common/AppHelmet";
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
                className="icon-github social-network-link"
              >
                github
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
