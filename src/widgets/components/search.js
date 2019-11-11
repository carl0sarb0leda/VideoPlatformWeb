import React from 'react';
import './search.css';
import Catego from '../../categories/category';
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

const Search = (props) => (
	<div>
		<form className="Search" onSubmit={props.handleSubmitt}>
			<input
				ref={props.setRefff}
				className="Search-input"
				placeholder="Search"
				onChange={props.handleChange}
				value={props.value}
			/>
		</form>
        

		{props.categor.filter(props.ser(props.val)).map((list) => {
			return <Catego {...list} key={list.id} openModal={props.openModal} />;
		})}
	</div>
    
);

export default Search;
