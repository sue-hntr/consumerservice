//utils.userDataAxios.js
import axios from "axios";


export default {
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(uID) {
    return axios.get("/api/users/" + uID);
  },
  // Deletes the user with the given id
  deleteUser: function(uID) {
    return axios.delete("/api/users/" + uID);
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  }
};
