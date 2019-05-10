import React, { Fragment } from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';

class StorePicker extends React.Component {
    static propTypes = {
        history: PropTypes.object
    }

    myInput = React.createRef();

    goToStore = e => {
        e.preventDefault();
        const storeName = this.myInput.current.value;
        this.props.history.push(`/store/${storeName}`);
    }

    render() {
        return (
            <Fragment>
                <form className="store-selector" onSubmit={this.goToStore}>
                    <h2>Please Enter a Store</h2>
                    <input 
                        type="text" 
                        ref={this.myInput}
                        required placeholder="Store Name" 
                        defaultValue={getFunName()} 
                    />
                    <button type="submit">Visit Store &rarr;</button>
                </form>
            </Fragment>
        );
    }
}

export default StorePicker;