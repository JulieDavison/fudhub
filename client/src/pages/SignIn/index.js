import React from "react";
import "./login.css";

function SignIn(){
    return (
        <div className="login">
        <div className="fud">
                <h1 id="top" style={{fontfamily:'Bungee Inline, cursive;'}}>fud</h1>
                <h1 id="bot" style={{fontfamily:'Bungee Inline, cursive;'}}>hub</h1>
        </div>

        <div className="loginbox">

                <h1>Login Here</h1>
                <form action="">
                    <p>
                        <img src="/images/user.png" style={{height:'12px',width:'12px', marginright:'5px'}}></img>E-mail</p>
                    <input type="text" name="" placeholder="Enter E-mail" id="email"></input>
    
                    <p>
                        <img src="/images/pass.ico" style={{height:'12px',width:'12px'}}></img>
                        Password</p>
                    <input type="password" name="" placeholder="Enter Password" id="password"></input>
                    <input type="submit" name="" value="Login" id="submit"></input>
                    <a href="/register.html">Don't have an account? Sign up
                        now!</a>
    
                </form>
    
    
            </div>
        </div>
        
    );
}

export default SignIn;