import React from 'react';

const Option = (props) => (
        <div>
            {props.optionText}
            <button 
                className='button button--link'
                onClick={(e) => {
                    props.handleDeletOption(props.optionText);
                }}
            >
            remove
            </button>
        </div>
    );


export default Option;