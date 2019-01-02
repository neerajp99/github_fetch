import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import UserDetails from "./components/UserDetails";
import { Route } from "react-router-dom";

const CLIENT_ID = "Iv1.6cb8076d393f5d0a";
const CLIENT_SECRET = "f5eab1e04e505c4798d79b6c8391cdcde30d131b";

class App extends Component {
  state = {
    users: []
  };
  getUser = async e => {
    e.preventDefault();
    const userName = e.target.elements.userName.value;
    const api_call = await fetch(
      `https://api.github.com/users/${userName}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
    );
    const data = await api_call.json();
    this.setState({
      users: data
    });
    console.log(this.state.users);
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => <Header />} />
        <Route exact path="/" render={() => <Form getUser={this.getUser} />} />
        <Route
          exact
          path="/"
          render={() => <UserDetails users={this.state.users} />}
        />
      </div>
    );
  }
}

export default App;
