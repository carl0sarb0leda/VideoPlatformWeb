import React, {Component} from 'react'
import Searchh from '../components/search'

class SearchContainer extends Component {

    state = {
        value: '' //Setting a default value, just in case we need a value before the user type something
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log( this.input.value, 'MMMMM')
    }
    setInputRef = (element) =>{
        this.input = element;
    }

    // handleInputChange = () =>{
    //     this.setState({
    //         value: this.input.value.replace(' ','-') 
    //     })
    // }
    //We can receive also a event
    handleInputChange = (event) => {
        this.setState({
            value: event.target.value.replace(' ','.') //replace is just for replace the spaces for dots
        })
        console.log(this.input.value)
        console.log(this.state)
    }
    searchingFor = (term)=>{
        return function(x){
            console.log('oooo')
            return x.title.toLowerCase().includes(term.toLowerCase()) || !term
        }
    }

    render(){
        return(
            <Searchh 
            handleSubmitt={this.handleSubmit}
            setRefff={this.setInputRef}
            handleChange={this.handleInputChange}
            value={this.state.value}
            categor={this.props.pp}
            openModal={this.props.openModal}
            val={this.props.val}
            ser={this.props.filter}
            ></Searchh>
        )
    }
}

export default SearchContainer