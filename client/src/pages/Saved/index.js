import React from "react";
import Container from "../../components/Container"
import Nav from "../../components/Nav"

import "./saved.css";

function Profile() {
    return (
        <Container>
            <Nav />
            <div className="saved">
                <h1 style={{ fontWeight: 'bold', margin: 10 }}>Saved recipes:</h1>
                <br></br>
                <div id="rsp">
                    <h1 style={{ fontWeight: 'bold', fontSize: 30 }}>One Pot Creamy Pesto Chicken Pasta Recipe</h1>
                    <p style={{ fontWeight: 'bold', fontSize: 15 }}>Total Cost: $10.41 recipe / $2.60 serving</p>
                    <img style={{ width: 150, height: 150 }} src="https://www.budgetbytes.com/wp-content/uploads/2019/10/Creamy-Pesto-Chicken-Pasta-close-skillet.jpg" alt="pasta"></img>
                </div>
                <br></br>
                <h1 style={{ fontWeight: 'bold', margin: 10 }}>Saved places:</h1>
                <br></br>
                <div id="rsp">
                    <h1 style={{ fontWeight: 'bold', fontSize: 30 }}>Carl's Jr.</h1>
                    <p style={{ fontWeight: 'bold', fontSize: 15 }}>Total Cost: $ </p>
                    <p>Fast Food, Burgers</p>
                    <p>4960 Barranca Pkwy</p>
                    <img style={{ width: 200, height: 150 }} src="https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/a329c0c3-ef31-4f6b-97ef-fc6b86e1f5ad/orig.jpg&quality=90&w=1500&h=900&mode=crop&format=jpg&v=4" alt="pasta"></img>
                </div>
                <br></br>
                <div id="rsp">
                    <h1 style={{ fontWeight: 'bold', fontSize: 30 }}>Pizza Hut</h1>
                    <p style={{ fontWeight: 'bold', fontSize: 15 }}>Total Cost: $ </p>
                    <p>Pizza, Italian, Chicken Wings</p>
                    <p>3601 Jamboree Rd</p>
                    <img style={{ width: 200, height: 150 }} src="https://cdn.livekindly.co/wp-content/uploads/2019/04/vegan-plant-based-pizza-hut-livekindly-1068x601.jpg" alt="pasta"></img>
                </div>
                
            </div>

        </Container>


    );

}
export default Profile;