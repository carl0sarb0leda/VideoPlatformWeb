import React, { Component } from 'react';
import Medias from './media';

class Playlisttt extends Component {
    render() {
        
        const categ = this.props.dataq.categories
        

        return (
            <div>
                    {//First the categories are mapped, to obtain the list
                        categ.map((list)=>{ 
                            return(
                                <div key={list.id}>
                                    { //Second the list are mapped, to obtain the playlist
                                        list.playlist.map((item)=>{
                                            return(
                                                <Medias {...item} key={item.id}/>
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

}

export default Playlisttt;