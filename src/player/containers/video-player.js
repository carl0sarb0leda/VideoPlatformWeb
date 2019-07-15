import React, {Component} from 'react'
import VPLayout from '../components/video-player-layout'
import VC from '../components/video-comp'
import Title from '../components/title-comp'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import VPControls from '../components/video-player-controls'
import formatTime from '../../utilities/utilities'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'

class VideoPlayer extends Component {
    state={
        pauseB: (!this.props.autoplay), //Start the botton in pause if the autoplay is true 
        duration: 0,
        currentTime: 0,
        loading: false,
        mute: false
    }
    handlePlayPause = (event) =>(
        this.setState({
            pauseB: !this.state.pauseB
        })
    )
    
    handleLoadedMetadata =(event) =>{
        this.video = event.target
        this.setState({
            duration: this.video.duration //'duration is a property from video'
        })
    }
    handleTimeUpdate = (event) => {
        this.setState({
            currentTime: this.video.currentTime //This 'currentTime' is a property from video
        })
    }
    handleProgressChange = (event) => {
        this.video.currentTime = event.target.value
    }
    handleSeeking = (event) => {
        this.setState({
            loading: true
        })
    }
    handleSeeked = (event) => {
        this.setState({
            loading: false
        })
    }
    handleVolumeChange= (event) => {
        this.video.volume = event.target.value
    }
    handleMute =() =>{ //toggle
        this.setState({
            mute: !this.state.mute
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
                    duration={formatTime(this.state.duration)}
                    currentTime={formatTime(this.state.currentTime)}/>
                    <ProgressBar
                    duration={this.state.duration}
                    value = {this.state.currentTime}
                    handleProgressChange={this.handleProgressChange}/>
                    <Volume
                    handleVolumeChange={this.handleVolumeChange}
                    handleMute={this.handleMute}/>
                </VPControls>
                <Spinner
                    active={this.state.loading}/>
                <VC 
                    autoplayyy={this.props.autoplay}
                    pause={this.state.pauseB}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    muteddd={this.state.mute}
                    srccc='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'/>
                
            </VPLayout>
        )
    }
}

export default VideoPlayer