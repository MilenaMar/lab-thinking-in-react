import React, { Component } from 'react'

class SearchBar  extends Component {

 render(){
    return (
    <div>
    <input type="text" name="search" value={this.props.search} onChange={(event) => this.props.handleChange(event.target.value)} />
    </div>
  )
}
}
export default SearchBar;
