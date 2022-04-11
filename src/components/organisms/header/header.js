import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../atoms";
import { BsSearch } from "react-icons/bs";
import "./header.css";
const Header = () => {
  return (
    <div className=" flex header align-center margin-1 justify-space-between">
      <Link to="/" className="btn secondary-link">
        Home
      </Link>
      <form className="flex right-header align-center position-relative">
        <Input
          inputClass="input-text md"
          inputType="text"
          inputPlaceHolder="Search"
        />
        <BsSearch className="position-absolute position-right cursor-pointer" />
      </form>
    </div>
  );
};

export { Header };
