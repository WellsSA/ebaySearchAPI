import React from 'react'
import ReactDOM from 'react-dom'
import ebayAPI from './../config/ebayAPI'
import AlertForm from './AlertForm'
import io from './../config/socketIO'
import editIcon from '../edit.svg'
import trashIcon from '../trash.svg'
import './assets/css/AlertItem.css'

class AlertItem extends React.Component {
    constructor(props, context) {
      super(props);
      // create a ref to store the textInput DOM element
      this.edit = React.createRef()
      
    }

    componentDidMount() {
        io.on('alertUpdated', data => {
            ReactDOM.render(<div ref={this.edit} />, this.edit.current)
        })
    }

    render () {
        return (  
            <div className="alert-item">
                <div className="info">
                    <p><strong>Search Phrase: </strong> {this.props.searchPhrase}</p>
                    <p><strong>E-mail: </strong> {this.props.email}</p>
                    <p><strong>Interval: </strong> a cada {this.props.interval} minutos</p>
                </div>
                <div className="editFormContainer" ref={this.edit} />
                <div className="operations">
                    <button onClick = { (e) => { ReactDOM.render(<AlertForm operation="update" 
                                                                            id={this.props.id} 
                                                                            searchPhrase={this.props.searchPhrase}
                                                                            email={this.props.email}
                                                                            interval={this.props.interval}
                                                                />, this.edit.current) }}><img src={editIcon} className="icon edit" alt="edit" /></button><br />
                    <button onClick = { (e) => { ebayAPI.delete(`alert/${this.props.id}`) }}><img src={trashIcon} className="icon remove" alt="remove" /></button>
                </div>
            </div>
        )
    } 
}

export default AlertItem