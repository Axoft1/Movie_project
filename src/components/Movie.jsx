function Movie(props) {
  const {
    movieLength,
    id,
    type,
    name,
    description,
    year,
    alternativeName,
    enName,
    poster,
  } = props;

  return (
    <div id={id} className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={poster} />
            <span className="card-title">{name}</span>
            <a className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons">add</i>
            </a>
          </div>
          <div className="card-content">
            <p>
              {description}{year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export { Movie };
