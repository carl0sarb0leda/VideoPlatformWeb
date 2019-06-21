import React, { Component } from 'react';
import Medias from './media';

class Playlisttt extends Component {
    render() {
        console.log(this.props.title);
        const {title} = this.props;
        return (
            <div>
                    <Medias title={title}/>
            </div>
        )
    }

}

export default Playlisttt;