import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import logo from "../../images/GD.png";

const NavBar = () => {
  return (
    <div className={style.container}>
      <img src={logo} alt="personal logo" className={style.img} />
      <NavLink to="/">Intro</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/skills">Skills</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <div>
        <input type="checkbox" name="toggleLenguage" />
        <label htmlFor="toggleLenguage" className={style.switch}></label>
      </div>
    </div>
  );
};

export default NavBar;
