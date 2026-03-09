import { Link as ScrollTo } from "react-scroll";

export const NavLink = ({ to, label, counter, onClick }) => (
  <ScrollTo to={to} spy smooth duration={1000} onClick={onClick}>
    {counter && (
      <>
        <span className="nav__counter">{counter}</span>
        <h3 className="nav__title nav__title--stroke nav__title--shadow">{label}</h3>
      </>
    )}
    {!counter && <p>{label}</p>}
  </ScrollTo>
);
