import React from "react";
import "./home.css";
import bank from "../../fudimgs/bank.png"
import location from "../../fudimgs/location.png"
import burger from "../../fudimgs/burger.png"

function Home() {
    return (
        <div className="home">
            <div className="fudhub">
                    <h1 id="top" style={{fontFamily: 'Bungee Inline, cursive', fontSize:80,marginTop: 35}}>fud</h1>
                    <h1 id="bot" style={{fontFamily: 'Bungee Inline, cursive', fontSize:80,marginTop: 10}}>hub</h1>
            </div>
            <div className="icons">
                    <img src={bank} alt=""></img>
                    <img src={location} alt=""></img>
                    <img src={burger} alt=""></img>
            </div>
            
            
        
            <div className="start" style={{width:150, padding: 5}}>
                <a href="SignIn" style={{fontfamily: 'Raleway, sans-serif', padding: 15, textDecoration:'none', color:'white' ,fontSize:20}}>Get Started</a>
            </div>
      </div>  
    );
}
export default Home;