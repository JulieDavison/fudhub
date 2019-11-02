import React from "react";
import "./budget.css";
import Container from "../../components/Container"
import Nav from "../../components/Nav"

function Budget(){
    return (
        <Container>
            <Nav/>
        
            <div className="choose">
        <div className="form1">
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
       
        <br></br>
        <div >
        
        </div>
        <a id="search"  href="/restaurantchoice"  style={{fontFamily:'Raleway, sans-serif', backgroundColor:'turquoise', border:'1px solid turquoise', borderRadius:5, padding: 10, color: 'white',textDecoration:'none', margin:10}}>restaurants</a>
        
        <a id="search"  href="/recipechoice"  style={{fontFamily:'Raleway, sans-serif', backgroundColor:'turquoise', border:'1px solid turquoise', borderRadius:5, padding: 10, color: 'white',textDecoration:'none',margin:10}}>recipes</a>
        </div>
        
    </div>
        </Container>
        
    );
}

export default Budget;