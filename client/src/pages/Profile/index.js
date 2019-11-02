import React from "react";
import "./profile.css";

function Profile() {
    return (
        <div className="container">
            <h1>Welcome! What would you like to do?</h1>
            <div className="b1">
                <img src="./images/search.svg" alt="search"></img>
                <p className="btns">search new</p>

                <img src="./images/saved.png" alt="saved"></img>
                <p className="btns">saved posts</p>
            </div>

        </div>);

}
export default Profile;