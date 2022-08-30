function Movie(props) {
  const {
    id,
    type,
    name,
    year,
    poster,
    rating,
  } = props;

  return (
    <div id={id} class="card">
    <a class="btn-floating halfway-fab waves-effect waves-light red">
      <i class="material-icons">{rating.imdb}</i></a>
    <div class="card-image waves-effect waves-block waves-light">
      
      <img class="activator" src={poster.url}/>
      
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{name} {year}<i class="material-icons right">{type}</i></span>
      <p></p>
    </div>
    
  </div>
  );
}
export { Movie };
