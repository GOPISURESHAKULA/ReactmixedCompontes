import React, { Component } from 'react';
import JSON from './data.json';

class Searchkeyword extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       news:JSON,
       filtered: []

     }
  } 
    getKeyword = (event) => {
        //console.log(event.target.value)
        let keyword = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keyword) > -1
        });
        this.setState({
            filtered
        })
        
      }

  render() {
  return ( 
      <div>
      <input  onChange={this.getKeyword}> AGS</input>
   
         </div>
     );
  }
}
 
export default Searchkeyword; 