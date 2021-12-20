import React from "react";
class Vehicule extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            marque : "bmw",
            couleur:"blue",
            poids:2000
        };
    }
    // the render method
    render() {
        return (
            <div>
                <h1>I am a {this.props.name} of vehicule </h1>
            </div>
        );
    }
}
export default  Vehicule;