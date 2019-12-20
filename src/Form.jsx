import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import EmployeeList from "./EmployeeList";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: "",
      user_pass: "",
      email: "",
      pass: "",
      mailerr: "",
      passerr: "",
      submitform: false
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

  onEmailClick = e => {
    e.preventDefault();
    var y = validEmailRegex.test(e.target.value) ? "" : "Email is not valid!";
    this.setState({
      email: e.target.value,
      mailerr: y
    });
  };
  onPassClick = e => {
    e.preventDefault();
    var z =
      e.target.value.length < 8 ? "Password must be 8 characters long!" : "";
    this.setState({
      pass: e.target.value,
      passerr: z
    });
  };

  formSubmit = e => {
    e.preventDefault();
    if (this.state.passerr == "" && this.state.mailerr == "") {
      if (
        this.state.email == this.state.user_name &&
        this.state.pass == this.state.user_pass
      ) {
        this.setState({
          submitform: true
        });
      } else {
        alert("invalid user name");
      }
    } else {
      alert("Please Enter The Valid Details.");
    }
  };

  render() {
    if (this.state.submitform) {
      console.log("form varified");
      return <Redirect to="/EmployeeList" />;
    }
    return (
      <div className="text-center form-bg">
        <form className="form-signin" onSubmit={this.formSubmit}>
          <img className="mb-4" src="login.png" alt="" width="72" height="72" />

          <div className="form-group" style={{ textAlign: "left" }}>
            <label htmlFor="exampleInputEmail1" style={{ float: "left" }}>
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.onEmailClick}
              required
            />
            <span className="error pb-4" style={{ color: "red" }}>
              {this.state.mailerr}
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" style={{ float: "left" }}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="pass1"
              placeholder="Password"
              onChange={this.onPassClick}
              required
            />
            <span
              className="error mb-4"
              style={{ color: "red", float: "left" }}
            >
              {this.state.passerr}
            </span>
          </div>
          <button type="submit" className="btn btn-info btn-block">
            LOGIN
          </button>
        </form>
      </div>
    );
  }
}
export default Form;
