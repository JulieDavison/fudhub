import axios from "axios";

export default {
  getFood: function() {
    return axios.get("/api/food");
  }
};
