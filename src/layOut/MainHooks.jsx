import React, { useState, useEffect } from "react";
import { Movies } from "../components/movies/Movies";
import { Preloader } from "../components/Preloader";
import { SearchHooks } from "../components/search/SearchHooks";
import styles from "./Main.module.scss";
import logo from "../img/Logo-WebTV.png";
import userIcon from "../img/User.png";
import lightSunIcon from "../img/lightSun.png";

const API_KEY = process.env.REACT_APP_API_KEY;

const MainHooks = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const searchMovies = (search, type = "") => {
    let newSearch = capitalize(search);
    setLoading(true);
    fetch(
      `https://api.kinopoisk.dev/movie?token=${API_KEY}&page=1&limit=19&search=${newSearch}&field=name${
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
      `https://api.kinopoisk.dev/movie?token=${API_KEY}&search=2022&field=year`
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
    <main className="conteiner">
      <header className={styles.headers}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.burger}>
          <span></span>
        </div>
        <div className={styles.search}>
          <SearchHooks searchMovies={searchMovies} />
        </div>
        <div className={styles.lightSunIcon}>
          <img src={lightSunIcon} alt="" />
        </div>
        <div className={styles.userIcon}>
          <img src={userIcon} alt="" />
        </div>
      </header>
      
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
};

export { MainHooks };
