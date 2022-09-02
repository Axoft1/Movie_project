import React from "react";


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.state = {search: ''};
  }

  handleChange(event) {
    this.props.searchMovies(event.target.value);
  }
  
  render() {
    const search = this.props.search
    return (<div className="row" >
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input 
              placeholder="введите название" 
              type="search" 
              className="validate"
              value={search}
              onChange={this.handleChange}
              />
              <span className="helper-text" data-error="wrong" data-success="right">Поиск фильмов</span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export { Search };
