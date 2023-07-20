import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <NavLink to="/">Intro</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contsct">Contact</NavLink>
    </div>
  );
};

export default NavBar;
