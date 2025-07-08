import React from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router";
const Logo = () => {
  return (
    <Link to="/">
      <div className="flex items-end gap-3 ">
        <img className="w-16 rounded-full h-16" src={logo} alt="" />
        <h1 className="mb-3 text-4xl font-bold text-accent">Buildium</h1>
      </div>
    </Link>
  );
};

export default Logo;
