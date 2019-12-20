import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUser: []
    };
  }
  componentDidMount() {
    fetch("/db_dashboard.json")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            allUser: result.user
          });
        },
        error => {
          console.log(error);
        }
      );
  }

  render() {
    console.log("xxx", this.state.allUser);
    const items = this.state.allUser.map(function(item) {
      return (
        <li key={item.id} className="alert alert-info">
          <strong>Name</strong>: {item.name} <br />
          <strong>Age</strong>: {item.age} <br />
          <strong>Gender</strong>: {item.gender} <br />
          <strong>Email</strong>: {item.email} <br />
          <strong>Mobile</strong>: {item.phoneNo} <br />
        </li>
      );
    });

    return (
      <div className="Dashboard container mt-4">
        <ul>{items}</ul>
      </div>
    );
  }
}

export default Dashboard;
