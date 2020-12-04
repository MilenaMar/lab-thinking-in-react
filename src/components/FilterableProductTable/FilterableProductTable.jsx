import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import ProductTable from '../ProductTable/ProductTable.jsx'

class FilterableProductTable extends Component {
  state = {
    search: "",
    products: this.props.products.data
}

handleChange = (search) => {
  this.setState({
  search: search
  })
}
 
  render() {
    const productsafterSearch = this.state.products.filter((el) => {
      return (
        el.name.toLowerCase().includes(this.state.search.toLowerCase())
      );

    })

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar products={this.state.products} change={this.handleChange} search={this.state.search}/>
        <ProductTable data={productsafterSearch} />
      </div>
    )
  }
}


export default FilterableProductTable;