import React, { Component } from "react";
// import Jumbotron from "./components/Jumbotron";
import Nav from "../../components/Nav";
// import Input from "../../components/Input";
// import Button from "./components/Button";
import API from "../../utils/API";
// import { RecipeList, RecipeListItem } from "../../components/RecipeList";
import { Container} from "../../components/Grid";
import "../RecipeResults/rr.css"

class RecipeResults extends Component {
  state = {
    recipes: [],
    recipeSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (

      <Container>
        <Nav />
        <div className="bg">
          <h1 style={{fontWeight:'bold'}}>One Pot Creamy Pesto Chicken Pasta Recipe</h1>
          <p style={{fontWeight:'bold'}}>Total Cost: $10.41 recipe / $2.60 serving</p>
          <img style={{width: 400, height:400}} src="https://www.budgetbytes.com/wp-content/uploads/2019/10/Creamy-Pesto-Chicken-Pasta-close-skillet.jpg" alt="pasta"></img>
          <p>
            Prep Time: 5 mins
            <br></br>
            Cook Time: 20 mins
            <br></br>
            Total Time: 25 mins
            <br></br>
            Servings: 4
        </p>
        <p>
        Ingredients:
        <br></br>
- 1 lb. boneless, skinless chicken breast $5.56
<br></br>
- 2 Tbsp butter $0.26
<br></br>
- 2 cloves garlic $0.16
<br></br>
- 1/2 lb. penne pasta $0.40
<br></br>
- 1.5 cups chicken broth $0.20
<br></br>
- 1 cup milk $0.32
<br></br>
- 3 oz. cream cheese* $0.29
<br></br>
- 1/3 cup basil pesto $0.73
<br></br>
- 1/4 cup grated Parmesan $0.44
<br></br>
- freshly cracked pepper $0.03
<br></br>
- 1 pinch crushed red pepper $0.02
        </p>

        <p>
        INSTRUCTIONS:
        <br></br>
1. Cut the chicken breast into 1-inch pieces. Add the butter to a deep skillet and melt over medium heat. Add the chicken to the skillet and cook over medium heat until the chicken is slightly browned on the outside.
<br></br>
2. While the chicken is cooking, mince the garlic. Add the garlic to the skillet with the chicken and continue to sauté for one minute more.
<br></br>
3. Add the uncooked pasta and chicken broth to the skillet with the chicken and garlic. Stir to dissolve any browned bits from the bottom of the skillet. Place a lid on the skillet, turn the heat up to medium-high, and bring the broth up to a boil.
<br></br>
4. Once the broth comes to a full boil, give the pasta a quick stir, replace the lid, and turn the heat down to medium-low. Let the pasta simmer over medium-low heat for about 8 minutes, or until the pasta is tender and most of the broth has been absorbed. Stir the pasta briefly every two minutes as it simmers, replacing the lid quickly each time.
<br></br>
5. Once the pasta is tender and most of the broth absorbed, add the milk, cream cheese (cut into chunks), and pesto. Stir and cook over medium heat until the cream cheese has fully melted into the sauce. Finally, add the grated Parmesan and stir until combined.
<br></br>
6. If using, add the fresh spinach and sliced sun dried tomatoes. Stir until the spinach has wilted, then remove the pasta from the heat. Top the pasta with freshly cracked pepper and a pinch of crushed red pepper, then serve.
        </p>
        <br></br>

        <a href="/saved" style={{fontFamily:'Raleway, sans-serif', backgroundColor:'turquoise', border:'1px solid turquoise', borderRadius:5, padding: 10, color: 'white',textDecoration:'none',margin:10}}>save</a>
        </div>


    );
  }
}

export default RecipeResults;