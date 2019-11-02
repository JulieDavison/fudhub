import axios from "axios";

export default {
  saveFood: function() {
    return axios.post("/api/food")
  }
};
