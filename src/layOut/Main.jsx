import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";


class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(
      "https://api.kinopoisk.dev/movie?token=RF4MN39-91PMGNC-N6KJA1P-5K33E0M&search=2020&field=year"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.docs }));
  }

  render() {
    const { movies } = this.state;
    return (
      <main className="conteiner content">
        {movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <Preloader/>
        )}
      </main>
    );
  }
}

export { Main };
