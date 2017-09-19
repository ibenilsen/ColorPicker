import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './SearchBar.css';
import _ from 'lodash';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }
  renderResults() {
    const input = this.state.term;
    if(input.length > 0) {
      const colors = this.props.colors;
      const regex = new RegExp(input, 'i');
      const result = _.filter(colors, function(elem) {return regex.test(elem.hex);});
      return (
        <div className="results" onClick={(event) => this.onResultClick()}>
          {result.map( (color) => {
            return (
              <Link to={`/color/${color.hex}`}  key={color.hex} className="result">
              <span style={{background: `#${color.hex}`}}></span>
              #{color.hex}
            </Link>
          )
        })}
      </div>
    )
  }
}
render() {
  return (
    <div className="SearchBar">
      <input
        value={this.state.term}
        onChange={ (event) => this.onInputChange(event.target.value)} placeholder="Search"/>
        {this.renderResults()}
      </div>
    )
  }
  onInputChange(term) {
    this.setState({term});
  }
  onResultClick() {
    this.setState({term: ''})
  }
}
function mapStateToProps(state) {
  return {
    colors: state.colors,
  }
}
export default connect(mapStateToProps)(SearchBar);
