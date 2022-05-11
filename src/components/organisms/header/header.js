import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../atoms";
import { BsSearch, BsFillSunFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { MdNightlightRound } from "react-icons/md";
import "./header.css";
import ReactLoading from "react-loading";
const Header = ({ loader, theme, toggleTheme }) => {
  return (
    <div className=" flex header align-center margin-1 justify-space-between">
      <Link to="/" className="btn secondary-link bold">
        Home
      </Link>
      <Link to="/settings">
        <AiFillSetting className="text-white cursor-pointer" />
      </Link>
      {loader ? (
        <ReactLoading
          type="spin"
          color="var(--white)"
          height={"2%"}
          width={"2%"}
        />
      ) : !theme ? (
        <MdNightlightRound
          onClick={toggleTheme}
          className="text-white cursor-pointer"
        />
      ) : (
        <BsFillSunFill
          onClick={toggleTheme}
          className="text-white cursor-pointer"
        />
      )}
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
