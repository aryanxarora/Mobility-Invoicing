import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import AccountDropDown from "./AccountDropDown";

function Navbar({ cookies, onLogout }) {
  return (
    <nav className="h-[10%] px-10 py-2 flex flex-col justify-around shadow-md shadow-slate-100 z-10">
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-5">
          <a href="/">
            <img src={logo} alt="" className="w-10" />
          </a>
          <h1 className="text-2xl">Invoices</h1>
        </div>
        <div className="flex justify-center items-center">
          {cookies.auth ? (
            // <a href="/" className="flex items-center gap-5 text-slate-500">
            //   <h1>Steven H.</h1>
            //   <img
            //     className="inline-block h-10 w-10 rounded-full"
            //     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            //     alt=""
            //   />
            // </a>
            <AccountDropDown cookies={cookies} onLogout={onLogout} />
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
