import styles from "./Movie.module.scss";

function Movie(props) {
  const { id, name, year, poster, rating } = props;

  return (
    <div className="itc-slider__item">
      <div id={id} className={styles.card}>
        <div className="">
          <i>{rating.imdb}</i>
        </div>
        <div className={styles.card_image}>
          <img className="activator" src={poster.url} alt={name} />
        </div>
        <div className={styles.card_content}>
          <span className={styles.card_title}>
            {name} {year}
          </span>
          <p></p>
        </div>
      </div>
    </div>
  );
}
export { Movie };
