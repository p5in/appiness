import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Form from "./Form";
import EmployeeList from "./EmployeeList";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_pass: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:8001/db_login.json")
      .then(res => res.json())
      .then(
        result => {
          // console.log("praveen", result.username);
          // console.log("pandey", result.password);
          this.setState({
            user_name: result.username,
            user_pass: result.password
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Form} />
          <Route exact path="/Dashboard" component={Dashboard} />
          <Route path="/EmployeeList" component={EmployeeList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
