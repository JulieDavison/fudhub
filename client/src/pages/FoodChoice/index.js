import React from "react";
import "./choice.css";

function FoodChoice() {
    return (
        <div className="container">
                
                <img id="fud" src="./images/pasta.jpg" alt=""></img>

                <div className="row">
                    <div className="col-md-6">

                            <img id="icon1" src="./images/yes.png" alt=""></img>
                        
                      
                            <img id="icon2" src="./images/next.png" alt=""></img>
                        
                    </div>    
                    <div className="col-md-6">
                           
                        </div>  
                </div>
                
            </div>
    );
}
export default FoodChoice;