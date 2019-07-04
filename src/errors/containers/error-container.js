import React, {Component} from 'react'
import Err from '../components/error'

class ErrorContainer extends Component {
    state = {
        handleError: false
    }
    componentDidCatch(error, info){
        this.setState({
            handleError: true
        })
    }

    render(){
        if(this.state.handleError){
            return(
                <Err></Err>
            )
        }
        return this.props.children
    }
}

export default ErrorContainer