import { Movie } from "./Movie";

function Movies(props) {
    const {movies} = props;// Деструктуризация Получаем фильмы из пропсов
    return <div className="movies" key={movies.id}>
        { movies.map(movie =>(
            
                movie.name === null ? ''
                :
               <Movie key={movie.id} {...movie}/>
            
        ))}
    </div>
}
export {Movies}