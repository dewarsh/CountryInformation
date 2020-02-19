import React from 'react';
import './style.css';

const Overwrite = ({onAction}) => {
    return (
        <button className="overwrite" onClick={onAction}>Overwrite</button>
    )
};

export default Overwrite;