import React from 'react'
import Medias from './media'
import PlayIcon from '../../icons/components/play'
import PauseIcon from '../../icons/components/pause'
import VolumeIcon from '../../icons/components/volume'
import FullScreenIcon from '../../icons/components/fullScreen'
import './playlist.css'

//FUNCTIONAL COMPONENT

function Playlisttt(props) {

    //const categ = props.playlist.categories //dataq is from home.js
    
    const list = props.playy //playy is from category.js (already mapped)

    // return (
    //     <div>
    //         {//First the categories are mapped, to obtain the list
    //             categ.map((list) => {
    //                 return (
    //                     <div key={list.id}>
    //                         <PlayIcon size={40} color="black" />
    //                         <PauseIcon size={40} color="green" />
    //                         <VolumeIcon size={40} color='grey'/>
    //                         <FullScreenIcon size={40} color='purple'></FullScreenIcon> {/*Another valid way*/}
    //                         { //Second the list are mapped, to obtain the playlist
    //                             list.playlist.map((item) => {
    //                                 return (
    //                                     <Medias {...item} key={item.id} />
    //                                 )
    //                             })
    //                         }
    //                     </div>
    //                 )
    //             })
    //         }
    //     </div>
    // )

    return (
        <div className='Playlist'>
            {
                list.map((item)=>{
                    return(
                        <Medias {...item} key={item.id} openModal={props.openModal}></Medias>
                    )
                })
            }
        </div>
    )
}

export default Playlisttt;