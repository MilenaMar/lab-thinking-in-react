import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import ProductTable from '../ProductTable/ProductTable.jsx'

class FilterableProductTable extends Component {
  
  render() {
    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar />
        <ProductTable data={this.props.products} />
      </div>
    )
  }
}


export default FilterableProductTable