import React, {Component} from 'react'
import './video-comp.css'

class VideoComponent extends Component {
    render(){
        return(
        <div className='Video'>
            <video 
            controls
            autoPlay={this.props.autoplayyy}
            src={this.props.srccc}/>
        </div>
        )}
}

export default VideoComponent