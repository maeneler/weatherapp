import React from "react";
import './SearchBar.css'

import { API_KEY } from "../../util/weatherstack";

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          searchTerm: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.search = this.search.bind(this)
    }

      handleChange(event){
        this.setState({searchTerm: event.target.value})
      }

      search(){
        this.props.onSearch(this.state.searchTerm)
      }

      
    
    render(){
        return (
            <div className="SearchBar">
                <input placeholder="Enter your Location"
                onChange={this.handleChange} />
                <button 
                    className="SearchButton"
                    onClick={this.search}>
                    Search Weather
                    </button>
            </div>
        )
    }
}

export default SearchBar