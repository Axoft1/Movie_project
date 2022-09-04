import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import {Search} from "../components/Search";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.searchMovies = this.searchMovies.bind(this);
    this.state = { movies: []};
  }
  git
  componentDidMount() {
    fetch(
      "https://api.kinopoisk.dev/movie?token=RF4MN39-91PMGNC-N6KJA1P-5K33E0M&field=movieId"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.docs }));
  }

  searchMovies=(search) => {
    fetch(
      `https://api.kinopoisk.dev/movie?token=RF4MN39-91PMGNC-N6KJA1P-5K33E0M&search=${search}&field=name`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.docs }));
  }
  
  render() {
    const movies = this.state.movies;

    return (
      <main className="conteiner content">
        <Search searchMovies={this.searchMovies}/>
        {movies.length ? (
          <Movies movies={movies} />
        ) : (
          <Preloader/>
        )}
      </main>
    );
  }
}

export { Main };
