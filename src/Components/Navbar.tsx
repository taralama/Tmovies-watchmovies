import React from "react";
import { useForm,SubmitHandler  } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

interface Prop {
  func: (name: string) => void;
}

interface FormData {
  moviename: string;
}


import "../index.css";

const Navbar: React.FC<Prop> = (props) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      moviename: "",
    }
  });

  const onSubmit:SubmitHandler<FormData>=(data: { moviename: string }) => {
    console.log(data, "is typing");
    props.func(data.moviename);
  };

  return (
    <>
      <div className="h-16 px-1  flex justify-between  border-slate-800 shadow-md shadow-slate-800 items-center ">
        <h1 className="text-4xl text-blue-500 font-bold items-center ">
          Movie Stream
        </h1>

        <ul className=" flex w-76 gap-3  font-mono text-slate-500 items-center">
          <li>Home</li>
          <li>Popular</li>
          <li>New</li>
          <li>High Rating</li>
        </ul>

        <ul className="flex items-center gap-2">
          <li>
            <IoSearchSharp className="text-yellow-500" />
          </li>
          <li>
            <form onChange={handleSubmit(onSubmit)}>
              <input
                className="bg-slate-700 font-mono w-72 px-5 rounded-md text-slate-400 focus:outline-none"
                placeholder="search movies ..."
                {...register("moviename")}
              />
            </form>
          </li>
        </ul>

        <nav className=" hover:bg-slate-700 hover:cursor-pointer rounded-full h-10 w-10 flex justify-center items-center">
          <GiHamburgerMenu className="text-white" />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
