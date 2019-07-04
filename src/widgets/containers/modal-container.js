import React, {Component} from 'react'
import {createPortal} from 'react-dom'

class ModalContainer extends Component {
    render(){
        return createPortal( //The parameters are what its going to render and where
            this.props.children, document.getElementById('modal-container') //modal-container is for index.html
        )
    }
}

export default ModalContainer