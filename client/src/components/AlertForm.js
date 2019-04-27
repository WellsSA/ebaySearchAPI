import React from 'react'
import ebayAPI from './../config/ebayAPI'

class AlertForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          searchPhrase: '',
          email: '',
          interval: '2',
        };
    }
  
    handleSubmit = async (event) => {
        event.preventDefault()

        const response = await ebayAPI.post('alert', this.state)
        // console.log(response.data)
    }

    handleOptionChange = (changeEvent) => {
        this.setState({
            interval: changeEvent.target.value
        })
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
                SearchPhrase:
                <input 
                    type="text" 
                    value={this.state.searchPhrase} 
                    onChange={(e) => this.setState({searchPhrase: e.target.value})} />
            </label>
            <label>
                E-mail:
                <input 
                    type="text" 
                    value={this.state.email} 
                    onChange={(e) => this.setState({email: e.target.value})} />
            </label>
            <div className="radio">
                <label>
                    <input type="radio" value="2" 
                                checked={this.state.interval === '2'} 
                                onChange={this.handleOptionChange} />
                    02 minutos
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="10" 
                                checked={this.state.interval === '10'} 
                                onChange={this.handleOptionChange} />
                    10 minutos
                </label>
            </div>
            <div className="radio">
                <label>
                    <input type="radio" value="30" 
                                checked={this.state.interval === '30'} 
                                onChange={this.handleOptionChange} />
                    30 minutos
                </label>
            </div>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default AlertForm