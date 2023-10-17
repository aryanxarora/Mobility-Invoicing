import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="h-1/6 px-10 flex flex-col justify-around shadow-md shadow-slate-100 z-10">
      <div className="flex justify-between">
        <div className="flex justify-center items-center gap-5">
          <img src={logo} alt="" className="w-10" />
          <h1 className="text-2xl">Invoices</h1>
        </div>
        <div className="flex justify-center items-center">
          <a href="" className="flex items-center gap-5 text-slate-500">
            <h1>Steven H.</h1>
            <img
              className="inline-block h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </a>
        </div>
      </div>
      <div className="flex gap-5 h-9">
        <input
          type="text"
          className="bg-slate-100 w-2/3 rounded-md px-5 text-md"
          placeholder="Search..."
        />
        <a
          href=""
          className="bg-slate-600 text-white rounded-lg text-sm font-bold flex justify-center items-center gap-2 px-5"
        >
          Submit
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
