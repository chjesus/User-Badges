import React, { Component } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header/Header";
import User from "../../components/user/User";

import firebase from "firebase";
import db from "../../config/firebase";

import "./ListUsers.scss";

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        avatar: ""
      },
      badges: [],
      badgesNew: []
    };

    this.band = false;
  }

  componentDidMount() {
    this.database();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.badges !== this.state.badges) {
      this.setState({
        badges: this.state.badges
      });
    }
  }

  database = () => {
    const { badges } = this.state;

    this.band = true;

    db.on("child_added", snap => {
      badges.push({
        firstName: snap.val().firstName,
        lastName: snap.val().lastName,
        email: snap.val().email,
        jobTitle: snap.val().jobTitle,
        avatar: snap.val().avatar,
        id: snap.key
      });

      if (this.band) {
        this.setState({ badges });
      }
    });

    db.on("child_removed", snap => {
      badges.forEach((element, index) => {
        if (element.id === snap.key) {
          console.log(element.id);
          badges.splice(index, 1);
        }
      });
      if (this.band) {
        this.setState({ badges });
      }
    });
  };

  componentWillUnmount() {
    this.band = false;
  }

  handleDeleteUser = id => {
    firebase
      .database()
      .ref("badges")
      .child(id)
      .remove();
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container__list">
          <div className="container__list--group">
            <div className="group__btn">
              <Link to="/user-badges/register" className="btn btn-primary">
                Nuevo Usuario
              </Link>
            </div>
            <ul className="group__list">
              <User
                badges={this.state.badges}
                deleteUser={this.handleDeleteUser}
              />
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListUsers;
