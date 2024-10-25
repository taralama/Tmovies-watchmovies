import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";




import "../index.css";

const Navbar: React.FC = () => {
  console.log("hello");
  return (
    <>
      <div className="h-14 p-1  flex justify-between shadow-lg shadow-black-*00 items-center">
        <nav className=" hover:bg-slate-700 hover:cursor-pointer rounded-full h-10 w-10 flex justify-center items-center"> <GiHamburgerMenu className="text-white"/></nav>
        <h1 className="text-4xl text-blue-500 font-serif items-center">T movies</h1>
        <input type="text" placeholder="Search Movies" className="sm:w-20 lg:w-80 p-2 focus:outline-none transition-all font-serif " /><MdLocalMovies className=" absolute right-5 z-10 text-blue-600"/>
      </div>

    </>
  );
};

export default Navbar;
