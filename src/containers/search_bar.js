import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/'

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ''};
  }

  onInputChange = (event) => {
    this.setState({
      term: event.target.value
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const {fetchWeather} = this.props;
    const {term} = this.state;

    fetchWeather(term);
    
    this.setState({
      term: ''
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a forecast"
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <span className="input-group-btn">
            <button type="Submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar);
