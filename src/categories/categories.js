//FUNCTIONAL COMPONENT FOR CATEGORIES
import React from 'react'
import Catego from './category'
import './categories.css'

function Categories(props){
    return(
        <div className='Categories'>
            {
                props.categor.map((list)=>{
                    return (
                        <Catego {...list} key={list.id}>
                            
                        </Catego>
                    )
                })
            }
        </div>
    )
}

export default Categories