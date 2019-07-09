import React, {Component} from 'react'
import VPLayout from '../components/video-player-layout'
import VP from '../components/video-comp'
import Titl from '../components/title-comp'

class VideoPlayer extends Component {
    render(){
        return(
            <VPLayout>
                <Titl 
                    titleee='PFFFFF'/>
                <VP 
                    autoplayyy={true} 
                    srccc='http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'/>
            </VPLayout>
        )
    }
}

export default VideoPlayer