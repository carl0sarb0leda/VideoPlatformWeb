import React, {Component} from 'react'
import './video-comp.css'

class VideoComponent extends Component {
    componentDidUpdate(prevProps){
        if(prevProps.pause !== this.props.pause){
            this.togglePlay()
        }
    }
    togglePlay = () =>{
        if (this.props.pause) {
            this.video.pause()  // this 'play' is the native method of video
        } else {
            this.video.play() // this 'pause' is the native method of video
        }
    }
    setRef = (element) =>{
        this.video = element
    }
    render(){
        
        return(
        <div className='Video'>
            <video 
            controls
            autoPlay={this.props.autoplayyy}
            src={this.props.srccc}
            ref={this.setRef}
            onLoadedMetadata={this.props.handleLoadedMetadata}
            onTimeUpdate={this.props.handleTimeUpdate}
            onSeeking={this.props.handleSeeking}
            onSeeked={this.props.handleSeeked}
            muted={this.props.muteddd}/>
        </div>
        )}
}

export default VideoComponent