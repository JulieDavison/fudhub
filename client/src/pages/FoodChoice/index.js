import React, { Component } from "react";
import Card from "../../components/Card";
import Images from "./images.json";
import Container from "../../components/Container"
import Nav from "../../components/Nav";
import API from "../../utils/API";


class FoodChoice extends Component {
    state = {
        image: "",
        food: "",
        currentIndex: 0,
        match: false,
        matchCount: 0,
        tempArray: Images

    };

    componentDidMount() {
        this.loadNextFood();
    }

    handleBtnClick = event => {

        const btnType = event.target.attributes.getNamedItem("data-value").value;

        const newState = { ...this.state };



        if (btnType === "pass") {

            newState.match = 1 === Math.floor(Math.random() * 1) + 1;


            newState.matchCount = newState.match
                ? newState.matchCount + 1
                : newState.matchCount;
                this.setState(newState);
                this.loadNextFood();
        } 
        else {
            
            newState.match = false;
        }

        
    };
    
    

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
            this.setState({tempArray: shuffleArray})
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
        console.log(this.state.tempArray)

    };


    render() {
        return (
            
            <Container>

                <Nav/>
                <Card
                    image={this.state.image}
                    handleBtnClick={this.handleBtnClick}
                    id={this.state.currentIndex}
                    food={this.state.food}
                />

            </Container>


        );
    }
}

export default FoodChoice;

