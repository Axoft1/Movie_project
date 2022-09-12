import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "", type: "" };
  }

  handleChange = (e) => {
    this.setState(
      () => ({ search: e.target.value }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    const search = this.state.search;
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="enter a name"
                type="search"
                className="validate"
                value={search}
                onChange={this.handleChange}
              />
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                Movie Search
              </span>
            </div>
          </div>
        </form>

        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type=""
              onChange={this.handleFilter}
              checked={this.state.type === ""}
            />
            <span>All</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="1"
              onChange={this.handleFilter}
              checked={this.state.type === "1"}
            />
            <span>Movie</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="2"
              onChange={this.handleFilter}
              checked={this.state.type === "2"}
            />
            <span>Series</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="3"
              onChange={this.handleFilter}
              checked={this.state.type === "3"}
            />
            <span>Сartoon</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="4"
              onChange={this.handleFilter}
              checked={this.state.type === "4"}
            />
            <span>Anime</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="5"
              onChange={this.handleFilter}
              checked={this.state.type === "5"}
            />
            <span>Animated-series</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="6"
              onChange={this.handleFilter}
              checked={this.state.type === "6"}
            />
            <span>TV show</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="7"
              onChange={this.handleFilter}
              checked={this.state.type === "7"}
            />
            <span>Mini series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
