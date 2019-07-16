import React from 'react'
import FullScreenI from '../../icons/components/fullScreen'

function FullScreen (props) {
    return(
        <div onClick={props.handleFS}>
            <FullScreenI
            color='white'
            size={35}/>
        </div>
    )
}

export default FullScreen