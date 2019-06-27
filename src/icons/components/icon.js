import React from 'react'

function Icon(props){
    const {
        color,
        size,
    } = props //destructuring
    return(        
        <svg
        fill={color}
        height={size}
        width={size}
        >
            {props.children}
        </svg>
        )
}

export default Icon