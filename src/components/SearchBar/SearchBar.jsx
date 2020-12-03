import React, { Component } from 'react'

class SearchBar  extends Component {

  state = {
    search:"",
  }

 //handleChange= (event)=>{
 //  console.log("event:", event.target.name, ": ", event.target.value); 
 //  this.setState({[event.target.name]:event.target.value})
 //}

 render(

 // const filterSearch = this.state.questions.filter((el)=> { 
 //   return (
 //     el.question.toLowerCase().includes(this.state.search.toLocaleLowerCase()) ||
 //     el.author.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase())
 //   )
 //   })


 ){

    return (
    <div>
      <input name="search" type="text" name="search" onChange={this.handleChange} placeholder="Enter input here"/>
    </div>
  )
}


}

export default SearchBar;
