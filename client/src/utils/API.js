import axios from "axios";


export default {

  // Gets all recipes
  getRecipe: function() {
      return axios.get("/api/recipes");
  }

};
