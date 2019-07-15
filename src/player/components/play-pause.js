import React from 'react'
import PlayI from '../../icons/components/play'
import PauseI from '../../icons/components/pause'
import './play-pause.css'

const PlayPause = (props) => (
    <div className='PlayPause'>
        {
            props.pause ?
                <button onClick={props.handlePlayPause}>
                    <PlayI size={35} color='white'></PlayI>
                </button>
                :
                <button onClick={props.handlePlayPause}>
                    <PauseI size={35} color='white'></PauseI>
                </button>

        }
    </div>
)

export default PlayPause