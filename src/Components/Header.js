import React from "react";
import Logo from "../Assets/logo.svg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={Logo} alt="logo incicle"></img>
    </header>
  );
};

export default Header;
