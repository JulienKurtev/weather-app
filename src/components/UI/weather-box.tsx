import React from "react";
import weatherBoxProps from "../../types/weather-box-props";

class WeatherBox extends React.Component<weatherBoxProps, {}>{
  render() {   
    return (
      <div key={this.props.id} className={`weather ${this.props.className ? this.props.className : ''}`}>
        <div className="weather__day">
          <span>{this.props.day}</span>
        </div>
        <div className="weather__content">
        <div className="weather__icon">
            <i className={`owf owf-${this.props.weatherIcon.id}-${this.props.weatherIcon.pod}`}></i>
        </div>
          <div>
            <strong className="weather__temperature">
              {this.props.temperature}
              <span className="weather__degree">°</span>
            </strong>
            {this.props.description && <p className="weather__description">{this.props.description}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherBox;