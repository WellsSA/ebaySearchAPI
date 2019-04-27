import React from 'react'
import ebayAPI from './../config/ebayAPI'

const AlertItem = (props, context) => (  
    <div className="alert-item">
        <div className="info">
            <p><strong>Search Phrase: </strong> {props.searchPhrase}</p>
            <p><strong>E-mail: </strong> {props.email}</p>
            <p><strong>Interval: </strong> a cada {props.interval} minutos</p>
        </div>
        <div className="operations">
            <button onClick = { (e) => {}}>Edit</button>
            <button onClick = { (e) => { ebayAPI.delete(`alert/${props.id}`) }}>Delete</button>
        </div>
    </div>
)

export default AlertItem