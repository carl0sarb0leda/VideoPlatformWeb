import React from 'react'
import logo from '../../../images/logo.png'
import './related.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLightbulb, faCompactDisc, faHeadphones } from '@fortawesome/free-solid-svg-icons'

function Related (){
    return(
        <div className="Background">
            <div className="Related">
            <img src={logo} width={250}></img>
            <h2>Video Platform Demo</h2>
            <p><FontAwesomeIcon icon={faLightbulb}/> Interesting</p>
            <p><FontAwesomeIcon icon={faCoffee}/> Coding</p>
            <p><FontAwesomeIcon icon={faCompactDisc} pulse/> Pop</p>
            <p><FontAwesomeIcon icon={faHeadphones}/> Relax</p>
            </div>
        </div>
    )
}

export default Related