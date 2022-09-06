import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import {Search} from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.searchMovies = this.searchMovies.bind(this);
    this.state = { movies: [], loading: true};
  }
  
  componentDidMount() {
    fetch(
      `https://api.kinopoisk.dev/movie?token=${API_KEY}&field=name&search=&page=1&limit=19`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.docs }))
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false})
      })
  }

  searchMovies=(search, type = '') => {
    this.setState({loading: true})
    fetch(
      `https://api.kinopoisk.dev/movie?token=${API_KEY}&page=1&limit=19&search=${search}&field=name${type !== '' ? `&field=typeNumber&search=${type}` : ''}`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.docs }))
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false})
      })
  }
  
  render() {
    const {movies, loading} = this.state;

    return (
      <main className="conteiner content">
        <Search searchMovies={this.searchMovies}/>
        {!loading ? 
          <Preloader/> 
        : 
          <Movies movies={movies} />
        }
      </main>
    );
  }
}

export { Main };
