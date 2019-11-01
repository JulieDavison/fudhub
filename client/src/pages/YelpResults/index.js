import React from "react";

class Yelp extends Component {
    runAPI() {
        const apiKey = 'irL2GGG0IDmOVFbUZFGbjGqbDpxxXM15N7HzW0g2xqLkKjGRTi5-g038R1H-_gi7DaIXEZvyV7Eo6HIR0ZVoQPPqEs_zX6aF3FC-bsmtqvUeQkFJY3xgjBS0sKG0XXYx';
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