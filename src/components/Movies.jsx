import { Movie } from "./Movie";

function Movies(props) {
    const {movies} = props;// Деструктуризация Получаем фильмы из пропсов
    return <div className="movies">
        { movies.map(movie =>(
            <Movie key={movie.id} {...movie}/>
        ))}
    </div>
}
export {Movies}