import React from "react";
import citiesProps from "../../types/cities-props";

const CITIES: string[] = [ 'Montreal' , 'Moscow' , 'Tokyo'];

class Cities extends React.Component<citiesProps, {}> {
    constructor(props:any) {
        super(props);
   
        this.retrieveTemperature = this.retrieveTemperature.bind(this);
    }

    retrieveTemperature(e: React.MouseEvent<HTMLButtonElement>){
        const button = e.target as HTMLButtonElement;
        this.props.retrieveTemperature(button.value);
    }

    render() {
        return (
            <div className="cities">
                {CITIES.map((city, i) => 
                    <button 
                        key={i}
                        onClick={this.retrieveTemperature}
                        value={city}
                        className={this.props.location === city ? 'active' : ''}>
                        {city}
                    </button> 
                )}
            </div>
        );
    }
}

export default Cities;
