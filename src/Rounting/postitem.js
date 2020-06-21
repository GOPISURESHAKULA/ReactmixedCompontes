import React from 'react';
//import { Link } from 'react-router-dom';

const Postitem = (props) => {
    return ( <div>
        {props.match.params.id}- {props.match.params.username}<br/>
        post details
        </div>       



    );
}

export default Postitem;