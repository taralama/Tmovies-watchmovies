import React, { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  Title: string;
  Year: number;
  Type: string;
  imdbID: string;
  Poster: string;
}
interface ApiResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

interface Props {
  name: string;
}
const Movieslist: React.FC<Props> = (prop) => {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  const checkMovieName = () => {
    if (prop.name == "") {
      return "harrypotter";
    } else {
      return prop.name;
    }
  };

  const fetchData = async () => {
    try {
      const resposnse = await axios.get<ApiResponse>(
        "http://www.omdbapi.com/?",
        {
          params: {
            apikey: "2b27f4bf",
            s: `${checkMovieName()}`,
          },
        }
      );

      if (!resposnse.data.Response) return alert("error ");
      
      setMovieList(resposnse.data.Search);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [checkMovieName()]);

  return (
    <>
      <img
        src="https://cineroyale.com.np/images/cinema/movies/banner/1689921810215-oppenheimer_2400x900.jpg"
        className=" h-72 w-full z-0"
        alt=""
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14 px-24 ">
        {movieList?.map((movie) => (
          <div className="h-64  border-x-4 rounded-lg cursor-pointer">
            <img src={movie.Poster} className="h-64 w-64" alt={movie.Title} />
            <h1 className="text-center text-slate-400 font-mono">
              {movie.Title}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movieslist;
