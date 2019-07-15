import React from 'react'
import './progress-bar.css'

const ProgressBar = (props) => {
    return(
        <div className='ProgressBar'>
            <input className = 'ProgressBarinput'
            type='range'
            min={0}
            max={props.duration}
            value={props.value}
            onChange={props.handleProgressChange}/>
        </div>
    )
}

export default ProgressBar