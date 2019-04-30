import axios from "axios";

Appt

export default {
  // Gets all appointment request for a staff member
  getAppts: function(uID) {
    return axios.get("/api/users/" + uID + "/appointments");
  },
  // Gets the specific user's appointment request
  getAppt: function(uID, aID) {
    return axios.get("/api/users/" + uID + "/appointments" + aID);
  },
  // Deletes the specific user's appointment request
  deleteAppt: function(uID, aID) {
    return axios.delete("/api/users/" + uID + "/appointments" + aID);
  },
  // Saves the specific user's appt to the database
  saveAppt: function(apptData) {
    return axios.post("/api/users/" + uID + "/appointments", apptData);
  }
};
