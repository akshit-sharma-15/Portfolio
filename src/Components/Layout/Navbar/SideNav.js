import { useContext } from "react";
import { ScrollContext } from "../../../Context/scroll";
import { NavLink } from "../../common/NavLink";

const navItems = [
  { to: "home", label: "Home", counter: "01" },
  { to: "about", label: "About", counter: "02" },
  { to: "skills", label: "Skills", counter: "03" },
  { to: "projects", label: "Projects", counter: "04" },
  { to: "contact", label: "Contact", counter: "05" },
];

function SideNav() {
  const { current } = useContext(ScrollContext);
  return (
    <nav className="nav__wrapper" id="navbar-example">
      <ul className="nav">
        {navItems.map(({ to, label, counter }) => (
          <li key={to} role="presentation" className={current === to ? "active" : ""}>
            <NavLink to={to} label={label} counter={counter} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNav;
