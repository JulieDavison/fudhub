import React, { Component } from "react";
import Card from "../../components/Card";
import images from "./images.json";
import Container from "../../components/Container"


class FoodChoice extends Component {
    state = {
        images,
        match: false,
        matchCount: 0
    };

    
    componentDidMount() {
        this.setState({ images: this.loadNextFood(this.state.images) });
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
        const j = images.length +1;
        const rand = Math.floor ((Math.random() * j.length));
        
        
        return images;
      };
    

    render() {
        return (
            <Container>
                  {this.state.images.map((e,i) =>
                    <Card
                    image={e.image} handleBtnClick={this.handleBtnClick}
                    food={e.food}
                    id = {e.id}
                    key={i}
                    
                    />
                    
                )}
                <h1 className="text-center">
            
          green button counter {this.state.matchCount}
        </h1>

                
            </Container>
         

        );
    }
}

export default FoodChoice;

