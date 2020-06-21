import React from 'react';
///WrappedComponent(variable)should start with capital 
const userHoc = (W,arg1) => {
    return (props) => ( 
    <div>
            
            {arg1}
            <W/>

    </div>
     );
}
 
export default userHoc;