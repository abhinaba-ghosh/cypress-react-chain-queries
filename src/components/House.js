import React from 'react';
import Cat from './Cat';
import Dog from './Dog';

const House = (props) => {
    return (
        <div house={props.house}>
            <h1 style={{ color: 'red' }}>This is {props.house}</h1>
            <Cat name={props.cat} />
            <Dog name={props.dog} />
        </div>
    );
};

export default House;
