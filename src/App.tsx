import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Movieslist from "./Components/Movieslist";
import Footer from "./Components/Footer";


const App: React.FC = () => {

  const [moviename,setMovieName] = useState<string>('');

  const setNameHandler = (name:string) =>{
      setMovieName(name)
  }
  return (
    <div>
      <Navbar func = {setNameHandler}/>
      <Movieslist name = {moviename} />
      <Footer/>
    </div>
  );
};

export default App;
