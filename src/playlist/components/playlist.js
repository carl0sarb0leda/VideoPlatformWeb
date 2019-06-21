import React, { Component } from 'react';
import Medias from './media';

class Playlisttt extends Component {
    render() {
        const playli = this.props.dataq.categories[0].playlist //asi esta definido en api.json para seleccionar los elementos de la primera playlist
        console.log(this.props.dataq);

        return (
            <div>
                {/* <Medias title={playli[0].title}/> */}
                    {
                        playli.map((item)=>{
                            return(
                            // <Medias title={item.title} image={item.cover} key={item.id}/>
                            //Equivalent to ↓↓↓↓
                            <Medias {...item} key={item.id}/>
                            )
                        })
                    }
            </div>
        )
    }

}

export default Playlisttt;