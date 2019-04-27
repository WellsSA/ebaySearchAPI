import React, { Component } from 'react'
import logo from './../logo.svg'
import AlertForm from './AlertForm'
import AlertItem from './AlertItem'
import ebayAPI from './../config/ebayAPI'

import './assets/css/App.css'

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            alerts: []
        }
    }
    async componentDidMount() {
        try {
          const response = await ebayAPI.get('alert')
          
          const results = response.data
          this.setState({
            alerts: results
          });
        } catch (err) {
          console.log(err)
        }
    }
    renderAlerts() {
        const { alerts } = this.state

        return alerts.map(alert => {
            console.log('alert', alert)
            return <AlertItem
                key={alert._id}
                id={alert._id}
                searchPhrase={alert.searchPhrase}
                email={alert.email}
                interval={alert.interval}
            />
        })
    }
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <AlertForm />
                <div className="AlertsList">
                    {this.renderAlerts()}
                </div>
                
            </header>
            </div>
        )
    }
}
export default App
