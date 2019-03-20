import React from 'react';

const Spinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

//if someone forgot to pass prop
Spinner.defaultProps = {
    message: 'Loading...'
};

export default Spinner;