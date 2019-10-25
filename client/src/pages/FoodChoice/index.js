import React, { Component } from "react";
import "./choice.css";
import API from "../../utils/API";


class FoodChoice extends Component {

    state = {
        food: "",
        image: ""
    }

    componentDidMount() {
        this.loadFood();
    }

    loadFood = () => {
        API.getFood()
            .then(res =>
                console.log(res)
                //this.setState({ food: res.data.food, image: res.data.image })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">

                <img id="fud" src="./images/pasta.jpg" alt=""></img>

                <div className="row">
                    <div className="col-md-6">

                        <img id="icon1" src="./images/yes.png" alt=""></img>


                        <img id="icon2" src="./images/next.png" alt=""></img>

                    </div>
                    <div className="col-md-6">

                    </div>
                </div>

            </div>
        )
    }
}
export default FoodChoice;