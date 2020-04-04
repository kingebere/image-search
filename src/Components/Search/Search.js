import React, { Component } from "react"; 
import TextField from '@material-ui/core/TextField';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select'
// import InputLabel from '@material-ui/core/InputLabel';
import axios from "axios";
import ImageResults from "../ImageResults/ImageResults";
class Search extends Component {
    state = {
        searchText:'',
        amount:10,
        apiUrl:'https://pixabay.com/api',
        apiKey:'15879119-fc4f21b3cfca8fc96f8fbd619',
        images:[]
    }

    
    
    
onTextChange = (e) =>{
    this.setState({[e.target.name]:e.target.value},()=>
    {
        axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo
        &per_page=${this.state.amount}&safesearch=true`)
        .then(res=>this.setState({images:res.data.hits}))
        .catch(err=>console.log(err))
    });
};




  render() {
    console.log(this.state.images)
    return (
    <div>
           <TextField id="outlined-basic" name="searchText"
            label="Search For Images"  value={this.state.searchText}
            onChange={this.onTextChange}
             variant="outlined" />
             <br/>


        <br/>
        {this.state.images.length > 0 ? (<ImageResults images={this.state.images} />) :null}
    </div>
   
    )
  }
}

export default Search;