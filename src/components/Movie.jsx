function Movie(props) {
  const { id, name, year, poster, rating } = props;

  return (

    <div id={id} className="card">
      <a className="btn-floating halfway-fab waves-effect waves-light red">
        <i className="material-icons">{rating.imdb}</i>
      </a>
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={poster.url} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {name} {year}
        </span>
        <p></p>
      </div>
    </div>
  );
}
export { Movie };
