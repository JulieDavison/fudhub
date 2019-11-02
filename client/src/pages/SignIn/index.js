import React from "react";
import Container from "../../components/Container";
import Nav from "../../components/Nav";
import "./login.css";

function SignIn(){
    return (
        <Container>
            <Nav/>
             <div className="login">
       

       <div className="loginbox">

               <h1>Login Here</h1>
               <form action="">
                   <p>
                      E-mail</p>
                   <input type="text" name="" placeholder="Enter E-mail" id="email"></input>
   
                   <p>
                       
                       Password</p>
                   <input type="password" name="" placeholder="Enter Password" id="password"></input>
                   <input type="submit" name="" value="Login" id="submit"></input>
                   <a href="/register">Don't have an account? Sign up
                       now!</a>
   
               </form>
   
   
           </div>
       </div>
        </Container>
        
    );
}

export default SignIn;