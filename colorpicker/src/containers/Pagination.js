import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPage } from '../actions/index';
import { bindActionCreators } from 'redux';
import './Pagination.css';

class Pagination extends Component {
  renderList() {
    if (this.props.colors.length <= 12) {
      return null;
    }
    const range = [];
    for (let i = 0; i < Math.ceil(this.props.colors.length / 12); ++i) {
      range.push(i);
    }
    return range.map(pageNumber => {
      const isCurrentPage = pageNumber === this.props.activePage;
      const onClick = event => {
        event.preventDefault();
        this.props.selectPage(pageNumber);
      };
      return (
        <li className={isCurrentPage ? 'active' : '' } onClick={onClick} key={pageNumber.toString()}>{pageNumber + 1}</li>
      );
    })
  }
  render() {
    return (
      <ul className="Pagination">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  return {
    colors: state.colors,
    activePage: state.activePage
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectPage}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
