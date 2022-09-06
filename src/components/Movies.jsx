import { Movie } from "./Movie";

function Movies(props) {
    const {movies = []} = props;// Пустой массив для случая есль ничего не придет фильмы из пропсов
    return <div className="movies" key={movies.id}>
        { movies.length ? movies.map(movie =>(
                
                movie.poster === null ? ''
                :
               <Movie key={movie.id} {...movie}/>
            
        )) : <h4>nothing found</h4>
    }
    </div>
}
export {Movies}