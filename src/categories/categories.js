//FUNCTIONAL COMPONENT FOR CATEGORIES
import React from 'react'
import Catego from './category'
import './categories.css'
import Search from '../widgets/containers/search-container'

function Categories(props){
    return(
        <div className='Categories'>
            <Search/>
            {
                props.categor.map((list)=>{
                    return (
                        <Catego {...list} key={list.id} handleCli={props.handleCli}>
                        </Catego>
                    )
                })
            }
        </div>
    )
}

export default Categories