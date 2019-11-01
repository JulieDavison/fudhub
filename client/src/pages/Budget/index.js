import React from "react";
import "./budget.css";

function Budget(){
    return (
        <div className="container">
        <h2>Step 1:</h2>
        <h3>Budget</h3>
        <input type="text" name="" placeholder="Enter Amount" id="budget"></input>
        <h2>Step 2:</h2>
        <p>please pick one below</p>
        <div className="row">
            <div className="col-md-6">
                    <label >
                            <input type="checkbox"></input>
                            <span className="checkmark">restaurants</span>
                        </label>
            </div>
            - or -
            <div className="col-md-6">
                    <label >
                            <input type="checkbox"></input>
                            <span className="checkmark" id="rec"></span>
                            recipes
                        </label>
            </div>
        </div>
        <div className="search">
            <p>start</p>
        </div>
    </div>

    );
}

export default Budget;