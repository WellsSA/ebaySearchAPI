import React from 'react'
import ebayAPI from './../config/ebayAPI'
import './assets/css/AlertForm.css'

class AlertForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          searchPhrase: '',
          email: '',
          interval: '',
        };
    }
    componentDidMount() {
        const { searchPhrase, email, interval } = this.props
        
        if(searchPhrase) this.setState({searchPhrase})
        if(email) this.setState({email})
        if(interval) this.setState({interval})

    }
    handleSubmit = async (event) => {
        event.preventDefault()
        const { operation } = this.props
        const { searchPhrase, email, interval } = this.state 
        
        if(searchPhrase !== '' && email !== '')
            if(operation === 'create')
                await ebayAPI.post('alert', { 
                    searchPhrase, 
                    email, 
                    interval
                })
            else if(operation === 'update') 
                await ebayAPI.put(`alert/${this.props.id}`, { 
                    searchPhrase, 
                    email, 
                    interval
                })
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
            interval: changeEvent.target.value
        })
    }
    
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="alertForm">
            <div>
                <label className="inputLabel">
                    SearchPhrase: 
                    <input 
                        type="text" 
                        value={this.state.searchPhrase} 
                        onChange={(e) => this.setState({searchPhrase: e.target.value})} />
                </label><br />
                <label  className="inputLabel">
                    E-mail: 
                    <input 
                        type="email" 
                        value={this.state.email} 
                        onChange={(e) => this.setState({email: e.target.value})} />
                </label><br />
            </div>
            <div className="radioInputs">
                <div className="radio">
                    <label>
                        <input type="radio" value="2" 
                                    checked={this.state.interval === '2'} 
                                    onChange={this.handleOptionChange} />
                        02 minutes
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="10" 
                                    checked={this.state.interval === '10'} 
                                    onChange={this.handleOptionChange} />
                        10 minutes
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="30" 
                                    checked={this.state.interval === '30'} 
                                    onChange={this.handleOptionChange} />
                        30 minutes
                    </label>
                </div>
            </div>
          <input className="submitInput" type="submit" value="Save Alert" />
        </form>
      );
    }
  }

export default AlertForm