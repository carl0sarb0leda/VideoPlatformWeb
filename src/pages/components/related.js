import React from 'react'
import logo from '../../../images/logo.png'
import './related.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faLightbulb, faCompactDisc, faHeadphones } from '@fortawesome/free-solid-svg-icons'

const Related = (props) => (
        <div className="Background">
            <img src={logo} width={250}></img>
            <div className="Related">
            <h2>Video Platform Demo</h2>
            <p><FontAwesomeIcon icon={faLightbulb}/> Interesting</p>
            <p><FontAwesomeIcon icon={faCoffee}/> Coding</p>
            <p><FontAwesomeIcon icon={faHeadphones}/> Relax</p>
            <p><FontAwesomeIcon icon={faCompactDisc} pulse/> Pop</p>
            <label>
				<p>Select your favourite category:</p>
				<select className="Filter-input" value={props.val} onChange={props.handleChange}>
                    <option value="">All</option>
                    <option value="Interesting">Interesting</option>
					<option value="Coding">Coding</option>
					<option value="Relax">Relax</option>
					<option value="Pop">Pop</option>
				</select>
			</label>
            </div>
        </div>
    )

export default Related