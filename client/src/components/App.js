import React, { Component } from 'react'
import logo from './../logo.svg'
import AlertForm from './AlertForm'
import AlertItem from './AlertItem'
import ebayAPI from './../config/ebayAPI'
import io from './../config/socketIO'
import './assets/css/App.css'

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            alerts: []
        }
    }
    async componentDidMount() {
        this.listenIOEvents()
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

    listenIOEvents = () => {

        io.on('alertCreated', data => {
            if(data)
                this.setState({ alerts : [data, ...this.state.alerts]})
        })
        io.on('alertDeleted', data => {
            if(data){
                let newAlerts = [...this.state.alerts]
                const index = newAlerts.findIndex(item => item._id === data._id)
                if (index !== -1) {
                    newAlerts.splice(index, 1)
                    this.setState({ alerts : newAlerts})
                }
            }
        })
        io.on('alertUpdated', data => {
            console.log('update')
            console.log(data)
            if(data){
                let newAlerts = [...this.state.alerts]
                const index = newAlerts.findIndex(item => item._id === data._id)
                if (index !== -1) {
                    newAlerts[index] = data
                    this.setState({ alerts : newAlerts})
                    this.forceUpdate()
                }
            }
        })
    }

    renderAlerts() {
        const { alerts } = this.state

        return alerts.map(alert => {
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
                <AlertForm operation="create"/>
                <div className="AlertsList">
                    {this.renderAlerts()}
                </div>
                
            </header>
            </div>
        )
    }
}
export default App
