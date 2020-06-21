import React, { Component } from 'react';
import LifeCycleExmples from './LifeCycleExmples'
class LifeCycle  extends Component {
    
    state = { 
            title:'GROUPS OF COMPANY'
     }
     
     
componentWillMount() {
    console.log("BEFORE RENDER")
    
}
componentDidMount() {
     
   
}

//WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
componentWillUpdate() {
    console.log("BEFORE UPDATE")
}
shouldComponentUpdate(nextProps, nextState) {
  
    if (nextState.title==='AGS GROUPS OF COMPANY')
    {
        return true;
    }
    else{
         return true;
    }
}
//WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
componentWillReceiveProps(nextProps) {
    console.log("BeforeWillReceiveProps")
}
componentDidUpdate() {
    console.log("AFTER UPDATE")
}
componentWillUnmount() {
    console.log("Unmount")
}


    render() { 
        console.log("RENDER")
        return ( 
        <div>
         <h3>{this.state.title}</h3>
        <button onClick={()=>this.setState({ title:'AGS GROUPS OF COMPANY'  })}>chanage title</button>
        <LifeCycleExmples/>
        </div>
        
        );
    }
}
 
export default LifeCycle;

