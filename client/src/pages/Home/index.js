//page.home.js
import React, { Component } from "react";
// import userDataAxios from "../utils/userDataAxios.js";
import LogoHeader from "../components/LogoHeader";
import NavButtons from "../components/NavButtons";



class Home extends Component {
    // state = {
    //   search: "",
    //   results: [],
    //   error: "",
    //   bookNow: []
    // };
  
    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    // componentDidMount() {
    // };
  
    // handleInputChange = event => {
    //   this.setState({ search: event.target.value });
    // };
  
    // handleFormSubmit = event => {
    //   event.preventDefault();
    //   API.getBooksGoogle(this.state.search)
    //     .then(res => {
    //       if (res.data.status === "error") {
    //         throw new Error(res.data);
    //       }
    //       console.log(res.data.items);
    //       this.setState({ results: res.data.items});
    //     })
    //     .catch(err => this.setState({ error: err.message }));
    // };

    // saveBook = book => {
    //   BookDataAxios.saveBook(book);
    //   // this.setState({
    //   //   bookNow: "the hobbit"      });
    //   // console.log(bookNow);  
    //   console.log(`I've been clicked`);
    //   console.log(this.props);
      

    // }

    render() {

      return (
        <div>
            <LogoHeader />
            <NavButtons />

            <h1 className="text-center">CRS Home Page</h1>
        </div>
      );
    }
  }
  
  export default Home;
  