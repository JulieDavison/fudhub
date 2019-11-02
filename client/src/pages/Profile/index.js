import React from "react";
import Container from "../../components/Container"
import Nav from "../../components/Nav"

import "./profile.css";

function Profile() {
    return (
        <Container>
            <Nav/>
            <div className="profile">
                <h1>Welcome!</h1>
                <br></br>
                <h3>What would you like to do?</h3>
                <br></br>
                <div className="b1">
                    
                    <br></br>
                    <a id="btns" href="/Budget" style={{margin: 30}}>search new</a>
                    <br></br>
                    
                    <br></br>
                    <a id="btns" href="/Saved" style={{margin: 30}}>saved posts</a>
                </div>
            </div>

        </Container>


    );

}
export default Profile;