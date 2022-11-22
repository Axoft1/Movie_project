import React, { useState } from "react";
import searchIcon from '../../img/search.svg'
import styles from './Search.module.scss'

const SearchHooks = (props) => {
  const { searchMovies = Function.prototype } = props;
  const [search, setSearch] = useState("");
  // const [type, setType] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    searchMovies(e.target.value, ''); 
  };

  // const handleFilter = (e) => {
  //   setType(e.target.dataset.type);
  //   searchMovies(search, e.target.dataset.type);
  // };

  return (
    <form className={styles.search}>
      <input
        placeholder="Find Your Love Movies"
        type="search"
        className={styles.validate}
        value={search}
        onChange={handleChange}
      />
      <div className={styles.searchIcon}>
        <img src={searchIcon} alt="" />
      </div>
      {/* <span
        className={styles.helper_text}
        data-error="wrong"
        data-success="right"
      ></span> */}

      {/* 
      <div>
      <label>
      <input
      className="with-gap"
      name="type"
      type="radio"
      data-type=""
      onChange={handleFilter}
      checked={type === ""}
      />
      <span>All</span>
        </label>
        
        <label>
        <input
        className="with-gap"
        name="type"
        type="radio"
        data-type="1"
        onChange={handleFilter}
        checked={type === "1"}
        />
        <span>Movie</span>
        </label>
        
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="2"
            onChange={handleFilter}
            checked={type === "2"}
            />
            <span>Series</span>
            </label>
            <label>
            <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="3"
            onChange={handleFilter}
            checked={type === "3"}
            />
            <span>Сartoon</span>
            </label>
            <label>
            <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="4"
            onChange={handleFilter}
            checked={type === "4"}
            />
            <span>Anime</span>
            </label>
            <label>
            <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="5"
            onChange={handleFilter}
            checked={type === "5"}
            />
          <span>Animated-series</span>
        </label>
        <label>
        <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="6"
            onChange={handleFilter}
            checked={type === "6"}
            />
            <span>TV show</span>
            </label>
            <label>
            <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="7"
            onChange={handleFilter}
            checked={type === "7"}
            />
            <span>Mini series</span>
            </label>
          </div> */}
    </form>
  );
};

export { SearchHooks };
