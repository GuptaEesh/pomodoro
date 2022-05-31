import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "../../atoms";
import { BsSearch, BsFillSunFill } from "react-icons/bs";
import { AiFillSetting, AiOutlineLogout } from "react-icons/ai";
import { MdNightlightRound } from "react-icons/md";
import "./header.css";
import ReactLoading from "react-loading";
import { useAuth, useData } from "../../../helper";
const Header = ({ loader, theme, toggleTheme }) => {
  // const [value, setValue] = useState("");
  const { dispatchToDo } = useData();
  const { logout } = useAuth();
  const debounceSearch = () => {
    let timer;
    return (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        dispatchToDo({ type: "UPDATE_SEARCH", payload: e.target.value });
      }, 300);
    };
  };

  return (
    <div className=" flex header align-center margin-1 justify-space-between">
      <section className="flex align-center flex-1">
        <Link to="/" className="btn secondary-link bold">
          Home
        </Link>
        <form className="flex right-header align-center position-relative">
          <Input
            inputClass="input-text md"
            inputType="text"
            inputPlaceHolder="Search"
            inputFunc={debounceSearch()}
          />
        </form>
      </section>
      <section className="flex align-center flex-1 right-header-nav justify-space-around">
        <Link to="/settings">
          <AiFillSetting className="text-white cursor-pointer" />
        </Link>
        <div className="flex align-center cursor-pointer" onClick={logout}>
          <AiOutlineLogout className="text-white " />
          <h2 className="text-white sm">Logout</h2>
        </div>
        <div className="theme-container">
          {loader ? (
            <ReactLoading
              type="spin"
              color="var(--white)"
              height="1.5rem"
              width="1.5rem"
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
        </div>
      </section>
    </div>
  );
};

export { Header };
