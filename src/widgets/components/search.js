import React from 'react'
import './search.css'
// function Search (){
//     return(
//         <form></form>
//     )
// }

//If it also posible to define like arrow function

// const Search = () => { 
//     return (
//     <form className='Search'>
//         <input className='Search-input' placeholder='Search'></input>
//     </form>
//     )
// }

//And it is also posible to omit type return

const Search = (props) =>
    (
        <form className='Search' onSubmit={props.handleSubmitt}>
            <input 
            ref={props.setRefff}
            className='Search-input'
            placeholder='Search'
            onChange={props.handleChange}
            value={props.value}
            ></input>
        </form>
    )

export default Search