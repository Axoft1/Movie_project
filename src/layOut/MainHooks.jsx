import React, { useState, useEffect } from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { SearchHooks } from "../components/SearchHooks";

const API_KEY = process.env.REACT_APP_API_KEY;

const MainHooks = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (search, type = "") => {
    setLoading(true);
    fetch(
      `https://api.kinopoisk.dev/movie?token=${API_KEY}&page=1&limit=19&search=${search}&field=name${
        type !== "" ? `&field=typeNumber&search=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.docs);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetch(
      `https://api.kinopoisk.dev/movie?token=${API_KEY}&field=name&search=&page=1&limit=19`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.docs);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <main className="conteiner content">
      <SearchHooks searchMovies={searchMovies} />
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export { MainHooks };
