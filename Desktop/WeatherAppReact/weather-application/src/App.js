import React, { Component } from 'react';

import './App.css';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY="9da403f9c6467f97e724b76ad81624c7"

class App extends Component {

  state={
    temperature: undefined, // will only change when we press the button as others
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,

  }
  getWeather = async(e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const type = e.target.elements.type.value;
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=${type}`);
    const data = await apiCall.json();

    if(city && country){
      // console.log(data);

      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error:""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error:'Please enter values 😒'
      });
    }
  }
  render() {
    return (
      <div>
        
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles/>
                </div>
                <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                  
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



