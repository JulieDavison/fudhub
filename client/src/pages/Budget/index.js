import React from "react";
import "./budget.css";
import Container from "../../components/Container"
import Nav from "../../components/Nav"

function Budget(){
    return (
        <Container>
            <Nav/>
        
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

export default Budget;