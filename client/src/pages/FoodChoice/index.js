import React, { Component } from "react";
import Card from "../../components/Card";
import Images from "./images.json";
import Container from "../../components/Container"
import Nav from "../../components/Nav";
import API from "../../utils/API";
import "../FoodChoice/choice.css"


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
                <div className="choose">
        <form className="form1">
        <br></br>
        <br></br>
        <h2 style={{fontFamily:'Raleway, sans-serif'}}>Step 1:</h2>
        <br></br>
        <h3 style={{fontFamily:'Raleway, sans-serif'}}>Budget</h3>
        <br></br>
        <input type="text" name="" placeholder="Enter Amount" id="budget"></input>
        <br></br>
        <br></br>
        <h2 style={{fontFamily:'Raleway, sans-serif'}}>Step 2:</h2>
        <br></br>
        <p style={{fontFamily:'Raleway, sans-serif'}}>please pick one below</p>
        <br></br>
        <div className="row">
            <div className="col-md-6">
                    <label className="checkedbox" >
                            <input type="checkbox"></input>
                            <span className="checkmark" style={{fontFamily:'Raleway, sans-serif'}}>restaurants</span>
                        </label>
            </div>
            <br></br>
           
            <br></br>
            <div className="col-md-6">
                    <label >
                            <input type="checkbox"></input>
                            <span className="checkmark" id="rec" style={{fontFamily:'Raleway, sans-serif'}}></span>
                            recipes
                        </label>
            </div>
        </div>
        <br></br>
        <div >
        <input id="search" type="submit" value="Submit" style={{fontFamily:'Raleway, sans-serif', backgroundColor:'turquoise', border:'1px solid turquoise', borderRadius:5, padding: 10, color: 'white'}}></input>
        </div>
        </form>
        
    </div>
                 
            </Container>


        );
    }
}

export default FoodChoice;

