import React, { Component } from 'react';
//import { Link } from 'react-router-dom'

import User from './User';
import userHoc from './UserHoc';


class Usermain extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  render() { 
    return (
      <div>
          Usermain
        <User/>
        
    </div>
    );
  }
}
 
export default userHoc(Usermain,'rkk')