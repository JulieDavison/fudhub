import React from "react";
import "./home.css";

function Home() {
    return (
        <div className="home">
            <div className="fud">
                    <h1 id="top" style={{fontFamily: 'Bungee Inline, cursive' }}>fud</h1>
                    <h1 id="bot" style={{fontFamily: 'Bungee Inline, cursive' }}>hub</h1>
            </div>
            <div className="icons">
                    <img src="/bank.png" alt=""></img>
                    <img src="/location.png" alt=""></img>
                    <img src="/burger.png" alt=""></img>
            </div>
            
            
        
            <div className="start">
                <p style={{fontfamily: 'Raleway, sans-serif'}}>Get Started</p>
            </div>
      </div>  
    );
}
export default Home;