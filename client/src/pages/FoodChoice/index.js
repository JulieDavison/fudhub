import React, { Component } from "react";
import Card from "../../components/Card";
import Images from "./images.json";
import Container from "../../components/Container"


class FoodChoice extends Component {
    state = {
        images: "",
        food: "",
        currentIndex: 0,
        match: false,
        matchCount: 0
    };


    componentDidMount() { 
        this.loadNextFood();
    }

    handleBtnClick = event => {

        const btnType = event.target.attributes.getNamedItem("data-value").value;

        const newState = { ...this.state };

        if (btnType === "pick") {

            newState.match = 1 === Math.floor(Math.random() * 1) + 1;


            newState.matchCount = newState.match
                ? newState.matchCount + 1
                : newState.matchCount;
        } else {

            newState.match = false;
        }

        this.setState(newState);
        this.loadNextFood();
    };

    loadNextFood = () => {
        let rand = Math.floor((Math.random() * Images.length));
        let currentImage = Images[rand].image;
        let food = Images[rand].food
        console.log(food)
        this.setState({currentIndex : rand})
        this.setState({images: currentImage})
        this.setState({food: food})
    };


    render() {
        return (
            <Container>
                    <Card
                        image={this.state.images} 
                        handleBtnClick={this.handleBtnClick}
                        id = {this.state.currentIndex}
                        food = {this.state.food}

                    />
            </Container>


        );
    }
}

export default FoodChoice;

