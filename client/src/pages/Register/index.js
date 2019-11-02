import React from "react";
import "./register.css";

function Register() {
    return (
        <div className="reg">
        <div className="fud">
            <h1 id="top" style={{fontfamily: 'Bungee Inline, cursive;'}}>fud</h1>
            <h1 id="bot" style={{fontfamily: 'Bungee Inline, cursive;'}}>hub</h1>
        </div>

        <div className="regbox">

            <h1>Register Now!</h1>
            <form action="">
                <p>
                    <img src="/images/user.png" alt="username" style={{height:'12px',width:'12px', marginright:'5px'}}></img>E-mail</p>
                <input type="text" name="" placeholder="Enter E-mail" id="email"></input>

                <p>
                    <img src="/images/pass.ico" alt="password" style={{height:'12px',width:'12px;'}}></img>
                    Password</p>
                <p class="help-block" style={{fontsize:'10px;'}}>(Password should be at least 6 characters)</p>
                <input type="password" name="" placeholder="Enter Password" id="password"></input>

                <p>
                    <img src="/images/pass.ico" alt="confirm" style={{height:'12px',width:'12px;'}}></img>
                    Confirm Password</p>
                <input type="password" name="" placeholder="Confirm Password" id="password"></input>
                <input type="submit" name="" value="Login" id="submit"></input>
                <a href="/register.html">Don't have an account? Sign up
                now!</a>

            </form>
        </div>
        </div>
    );
}
export default Register;