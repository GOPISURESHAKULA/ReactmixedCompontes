import React, { Component } from 'react';
import Purecomponent from './purecomponent';
Purecomponent
class REFANDDOM extends Component {

   state = { 
            title:'lifecycle',
            color:'red'
        }
       changeColor(){
 
           this.refs.myColor.style.color ='blue'
       }
    
    render() {
        const style={
            color:this.state.color
        }
        return (  
            
            <div>
                <h3 style={style} ref="myColor" >{this.state.title}</h3>
                <button onClick={()=>this.changeColor()}>Change text</button>
           <Purecomponent/>
            
            </div>

        )
    
}
} 
export default REFANDDOM;