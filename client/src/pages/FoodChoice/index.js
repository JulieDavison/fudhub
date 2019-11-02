import React, { Component } from "react";
import Card from "../../components/Card";
import Container from "../../components/Container"
import Images from "./images.json";


class FoodChoice extends Component {

    state = {
        image: "",
        food: "",
        currentIndex: 0,
        tempArray: Images
    };

    componentDidMount() {
        this.loadNextFood();
    }

    shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    loadNextFood = () => {
        if (this.state.currentIndex >= this.state.tempArray.length) {
            let shuffleArray = this.shuffle(this.state.tempArray)
            this.setState({ tempArray: shuffleArray })
            let currentIndex = 0;
            let currentImage = this.state.tempArray[currentIndex].image;
            let currentFood = this.state.tempArray[currentIndex].food;
            currentIndex++;
            this.setState({ image: currentImage });
            this.setState({ food: currentFood });
            this.setState({ currentIndex: currentIndex });
        }
        else {
            let currentIndex = this.state.currentIndex;
            let currentImage = this.state.tempArray[currentIndex].image;
            let currentFood = this.state.tempArray[currentIndex].food;
            currentIndex++;
            this.setState({ image: currentImage });
            this.setState({ food: currentFood });
            this.setState({ currentIndex: currentIndex });
        }
    };

    pickFood = () => {
        localStorage.setItem( 'food', this.state.food );
    };
    render() {
        return (
            <Container>
                <Card
                    image={this.state.image}
                    loadNextFood={this.loadNextFood}
                    pickFood={this.pickFood}
                    id={this.state.currentIndex}
                    food={this.state.food}
                />
            </Container>
        );
    }
}

export default FoodChoice;

