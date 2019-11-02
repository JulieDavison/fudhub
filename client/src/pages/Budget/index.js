import React, { Component } from "react";
import "./budget.css";
import API from "../../utils/API";

class Budget extends Component {

    state = {
        budget: "",
        restaurant: "",
        recipe: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.budget) {
          API.saveFood({
            budget: this.state.budget,
            recipe: this.state.recipe,
            restaurant:this.state.restaurant
          })
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
      };
    

    render() {
        return (
            <div className="container">
                <form>
                    <h2>Step 1:</h2>
                    <h3>Budget</h3>
                    <input type="text" name="budget" onChange={this.handleInputChange} placeholder="Enter Amount" id="budget"></input>
                    <h2>Step 2:</h2>
                    <p>please pick one below</p>
                    <div className="row">
                        <div className="col-md-6">
                            <label >
                                <input type="checkbox" name="restaurant" onChange={this.handleInputChange.bind(this)}></input>
                                <span className="checkmark">restaurants</span>
                            </label>
                        </div>
                        - or -
            <div className="col-md-6">
                            <label >
                                <input type="checkbox" name="recipe" onChange={this.handleInputChange}></input>
                                <span className="checkmark"></span>
                                recipes
                        </label>
                        </div>
                    </div>
                    <div className="search">
                        <input type="submit" value="Submit" onClick={this.submitPage} ></input>
                    </div>
                </form>

            </div>
        );
    }
}
export default Budget;