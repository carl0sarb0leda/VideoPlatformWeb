import React, {Component} from 'react'
import VPLayout from '../components/video-player-layout'
import VC from '../components/video-comp'
import Title from '../components/title-comp'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import VPControls from '../components/video-player-controls'

class VideoPlayer extends Component {
    state={
        pauseB: (!this.props.autoplay), //Start the botton in pause if the autoplay is true 
        duration: 0
    }
    handlePlayPause = (event) =>(
        this.setState({
            pauseB: !this.state.pauseB
        })
    )
    
    handleLoadedMetadata =(event) =>{
        this.video = event.target
        this.setState({
            duration: this.video.duration
        })
    }

    render(){
        
        return(
            <VPLayout>
                <Title 
                    titleee='PFFFFF'/>
                <VPControls>
                    <PlayPause
                    pause={this.state.pauseB}
                    handlePlayPause={this.handlePlayPause}/>
                    <Timer 
                    duration={this.state.duration}/>
                </VPControls>
                <VC 
                    autoplayyy={this.props.autoplay}
                    pause={this.state.pauseB}
                    handleLoadedMetadata={this.handleLoadedMetadata} 
                    srccc='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'/>
            </VPLayout>
        )
    }
}

export default VideoPlayer