import React, { Component } from 'react';
import { connect } from 'react-redux';
import ColorCard from '../components/ColorCard';
import ListPagination from './Pagination';

class ColorList extends Component {
  renderCards() {
    const startIndex = 12 * this.props.activePage;
    const result = this.props.colors.slice(startIndex, startIndex + 12);
    return result.map( (color) => {
      return <div className="col-xs-12 col-sm-6 col-md-3"  key={color.hex}><ColorCard color={color}/></div>
    })
  }
  render() {
    return (
      <div className="ColorList">
        <div className="row">
          {this.renderCards()}
        </div>
          <ListPagination />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    colors: state.colors,
    activePage: state.activePage
  }
}
export default connect(mapStateToProps)(ColorList);
