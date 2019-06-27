import React from 'react'
import Medias from './media'
import PlayI from '../../icons/components/play'

//FUNCTIONAL COMPONENT

function Playlisttt (props) {
        
        const categ = props.dataq.categories //dataq is from index.js

        return (
            <div>
                <PlayI 
                    size={50}
                    color="blue"
                /> 
                {//First the categories are mapped, to obtain the list
                    categ.map((list) => {
                        return (
                            <div key={list.id}>
                                { //Second the list are mapped, to obtain the playlist
                                    list.playlist.map((item) => {
                                        return (
                                            <Medias {...item} key={item.id} />
                                        )
                                    })
                                }

                            </div>
                        )
                    })
                }
            </div>
        )
}

export default Playlisttt;