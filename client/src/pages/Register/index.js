import React from "react";
import Container from "../../components/Container";
import Nav from "../../components/Nav";
import "./register.css";

function Register() {
    return (
        <Container>
            <Nav/>
            <div className="reg">
       

       <div className="regbox">

           <h1>Register Now!</h1>
           <form action="">
               <p>
                   E-mail</p>
               <input type="text" name="" placeholder="Enter E-mail" id="email"></input>

               <p>
                   
                   Password</p>
               <p class="help-block" style={{fontsize:'10px;'}}>(Password should be at least 6 characters)</p>
               <input type="password" name="" placeholder="Enter Password" id="password"></input>

               <p>
                   
                   Confirm Password</p>
               <input type="password" name="" placeholder="Confirm Password" id="password"></input>
               <input type="submit" name="" value="Login" id="submit"></input>
               <a href="/register.html">Don't have an account? Sign up
               now!</a>

           </form>
       </div>
       </div>
        </Container>
        
    );
}
export default Register;