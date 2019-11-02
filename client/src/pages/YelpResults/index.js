import React, { Component } from "react";
import Container from "../../components/Container";
import Nav from "../../components/Nav";
import "./yelp.css"

function YelpResults() {
    return (
        <Container>
            <Nav />
            <div className="bg2">
                <h1 style={{fontWeight:'bold',fontSize:50}}>Carl's Jr</h1>
                <h3 style={{fontWeight:'bold', fontSize:25}}>Budget: $</h3>
                <p>Fast Food, Burgers</p>
                <p>Phone Number: (949) 559-0882</p>
                <p>4960 Barranca Pkwy
Irvine, CA 92604</p>
<br></br>
<a href="https://www.carlsjr.com/menu/nutritional_calculator_landing">View Menu</a>
<br></br>
<img src="https://media.blogto.com/articles/e0f2-20150408-carlsjr590-04.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70" style={{width:300,height:200}} alt="burger"></img>
<p style={{fontSize:12,}}>
Mon
<br></br>
6:00 am - 10:00 pm
<br></br>
Tue
<br></br>
6:00 am - 10:00 pm
<br></br>
Wed
<br></br>
6:00 am - 10:00 pm
<br></br>
Thu
<br></br>
6:00 am - 10:00 pm
<br></br>
Fri
<br></br>
6:00 am - 10:00 pm
<br></br>
Sat
<br></br>
6:00 am - 10:00 pm
Open now
<br></br>
Sun
<br></br>
6:00 am - 10:00 pm


</p>


<br></br>

<a href="/saved" style={{fontFamily:'Raleway, sans-serif', backgroundColor:'turquoise', border:'1px solid turquoise', borderRadius:5, padding: 10, color: 'white',textDecoration:'none',margin:10}}>save</a>

            </div>
           
        </Container>
    );
}

export default YelpResults;