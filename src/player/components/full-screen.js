import React from 'react'
import FullScreenI from '../../icons/components/fullScreen'
import './full-screen.css'

function FullScreen (props) {
    return(
        <div className='FullScreennn'
            onClick={props.handleFS}>
            <FullScreenI
            color='white'
            size={35}/>
        </div>
    )
}

export default FullScreen