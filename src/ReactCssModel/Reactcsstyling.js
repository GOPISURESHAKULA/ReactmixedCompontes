import React from 'react';
import classes from '../css/styles.css'


class Reactcsstyling extends Component {
    state = { Reactcsstyling: 'check' }
    render() {
        return (

            <div className={classes.news_item}>


                <h3>{this.state.Reactcsstyling}</h3>

            </div>

        );
    }
}

export default Reactcsstyling;




















