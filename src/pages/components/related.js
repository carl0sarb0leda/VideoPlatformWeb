import React from 'react'
import logo from '../../../images/logo.png'
import './related.css'

function Related (){
    return(
        <div className="Related">
            <img src={logo} width={250}></img>
            <h2>Video Platform Demo</h2>
            <p>Interesting</p>
            <i class="fas fa-theater-masks"></i>
            <p>Coding</p>
            <p>Pop</p>
            <p>Relax</p>
        </div>
    )
}

export default Related