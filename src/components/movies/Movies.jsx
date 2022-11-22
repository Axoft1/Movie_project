import { Movie } from "./Movie";
import styles from "./Movie.module.scss";

function Movies(props) {
  const { movies = [] } = props; // Пустой массив для случая есль ничего не придет фильмы из пропсов
  return (
    <div className="itc-slider">
      <div className="itc-slider__wrapper">
        <div className="itc-slider__items">
          {movies.length ? (
            movies.map((movie) =>
              movie.poster === null ? "" : <Movie key={movie.id} {...movie} />
            )
          ) : (
            <h4>nothing found</h4>
          )}
        </div>
      </div>

      <button className="itc-slider__btn itc-slider__btn_prev"></button>
      <button className="itc-slider__btn itc-slider__btn_next"></button>
    </div>
    // <div className={styles.movies} key={movies.id}>
    //   {movies.length ? (
    //     movies.map((movie) =>
    //       movie.poster === null ? "" : <Movie key={movie.id} {...movie} />
    //     )
    //   ) : (
    //     <h4>nothing found</h4>
    //   )}
    // </div>
  );
}
export { Movies };
