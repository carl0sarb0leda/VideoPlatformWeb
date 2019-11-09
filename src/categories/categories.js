//FUNCTIONAL COMPONENT FOR CATEGORIES
import React from 'react'
import Catego from './category'
import './categories.css'
import Search from '../widgets/containers/search-container'

function Categories(props){
    return(
        <div className='Categories'>
            <Search pp={props.categor} openModal={props.openModal}/>
            {/* {
                props.categor.filter(props.searching).map((list)=>{
                    return (
                        <Catego {...list} key={list.id} openModal={props.openModal}>
                        </Catego>
                    )
                })
            } */}
        </div>
    )
}

export default Categories