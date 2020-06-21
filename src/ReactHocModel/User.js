import React from 'react';
import userHoc from './UserHoc';
const User = () => {
    return ( <div>
        <p>ram</p>
    </div> );
}
 
export default userHoc(User,'Ramesh');
