//Functional component for category
import React from 'react'
import PlayLi from '../playlist/components/playlist'
import './category.css'

function Category(props){
    return(
        <div className="Category">
            <h2 className="Category-title">{props.title}</h2>
            <p className="Category-description">{props.description}</p><br/>
            <PlayLi playy={props.playlist} openModal={props.openModal}>
                
            </PlayLi>
        </div>
    )
}

export default Category