import React from "react";

const NodeElement = (props) =>{
    let defaulSize = '20px',
        defaultColor = 'black',
        defaultBg = 'white';
    return (
        <span style={{fontSize: props.fontSize || defaulSize,
            color: props.color || defaultColor,
            background: props.background} || defaultBg} >
            {props.text + ' '}
        </span>
    )
}

export default  NodeElement