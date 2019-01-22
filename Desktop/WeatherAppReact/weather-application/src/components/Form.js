import React from "react";

const Form = props => (
   <form onSubmit={props.getWeather}>
      <input  type="text" name="city" placeholder="City..."/>
      <input type="text" name="country" placeholder="Country..."/>
      <select name="type">
          <option value="metric">metric (Celsius)</option>
          <option value="default">Default (Kelvin)</option>
          <option value="imperial">non-metric (Farenheit)</option>
      </select>
      <button>Get Weather</button>
    </form>
            
);

export default Form;