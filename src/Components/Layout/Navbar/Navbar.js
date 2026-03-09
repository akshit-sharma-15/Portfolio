import { useState } from "react";
import { NavLink } from "../../common/NavLink";

const navItems = ["home", "about", "skills", "projects", "contact"];

function Navbar() {
  const [open, toggleOpen] = useState(false);
  const handleClick = () => toggleOpen(!open);

  return (
    <>
      <li>
        <button className={`ham${open ? " ham--active" : ""}`} onClick={handleClick} aria-label="Toggle menu">
          <span className="ham__line" />
          <span className="ham__line" />
          <span className="ham__line" />
        </button>
      </li>
      <div className={`${open ? "open" : ""} overlay`} id="overlay">
        <nav className="overlay-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item}>
                <NavLink to={item} label={item.charAt(0).toUpperCase() + item.slice(1)} onClick={handleClick} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
