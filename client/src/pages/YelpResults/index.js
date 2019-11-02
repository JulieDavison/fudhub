import React from "react";
require("dotenv").config();

'use strict';

const yelp = require('yelp-fusion');


class Yelp extends Component {
    runAPI() {
        const apiKey = process.env.yelpAPI;
        const searchRequest = {
            term: "burger",
            location: "orange county",
            price: "1",

        };
        const client = yelp.client(apiKey);
        client.search(searchRequest).then(response => {
            const firstResult = response.jsonBody.businesses[0];
            const prettyJson = JSON.stringify(firstResult, null, 4);
            console.log(prettyJson);
        }).catch(e => {
            console.log(e);
        });
    }
    render() {
        return (
            <div className="reg">
            <div className="fud">
                <h1 id="top" style={{fontfamily: 'Bungee Inline, cursive;'}}>fud</h1>
                <h1 id="bot" style={{fontfamily: 'Bungee Inline, cursive;'}}>hub</h1>
            </div>
    
            <div className="regbox">
    
                
                
            </div>
            </div>
    );
  }
}

export default YelpResults;