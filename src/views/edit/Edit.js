import React, { Component } from "react";

import FormBadge from "../../components/form/FormBadge";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";

import firebase from "firebase";

import "./Edit.scss";

class Edit extends Component {
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
      loading: false,
      success: false,
      error: false
    };
  }

  componentDidMount() {
    this.database();
  }
  componentDidUpdate(prevProps, prevState) {}

  database = async () => {
    this.setState({ loading: true, error: null });
    const id = this.props.match.params.id;

    try {
      const data = await firebase
        .database()
        .ref("/badges/" + id)
        .once("value");

      this.setState({
        loading: false,
        form: {
          id: this.props.match.params.id,
          firstName: data.val().firstName,
          lastName: data.val().lastName,
          email: data.val().email,
          jobTitle: data.val().jobTitle,
          avatar: data.val().avatar
        }
      });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      },
      error: false,
      success: false
    });
  };

  handleChangeAvatar = e => {
    e.preventDefault();
    let randomNumber = Math.floor(Math.random() * 100000);

    this.setState({
      form: {
        ...this.state.form,
        [e.target
          .name]: `https://www.gravatar.com/avatar/${randomNumber}?d=identicon`
      }
    });
  };

  handleClick = e => {
    e.preventDefault();

    if (
      this.state.form.firstName !== "" &&
      this.state.form.lastName !== "" &&
      this.state.form.email !== "" &&
      this.state.form.jobTitle !== ""
    ) {
      firebase
        .database()
        .ref("/badges/" + this.props.match.params.id)
        .set(this.state.form);
      this.setState({ success: "Usuario Actualizado" });
      //this.cleanForm();
    } else {
      this.setState({ error: true });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  handleValiteForm = () => {
    if (
      this.state.form.firstName !== "" &&
      this.state.form.lastName !== "" &&
      this.state.form.email !== "" &&
      this.state.form.jobTitle !== ""
    ) {
      firebase
        .database()
        .ref("/badges/" + this.props.match.params.id)
        .set(this.state.form);
      //db.push().set(this.state.form);
      this.setState({ success: true });
      //this.cleanForm();
    } else {
      this.setState({ error: true });
    }
  };

  cleanForm = () => {
    this.setState({
      form: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        avatar:
          "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
      }
    });
  };

  handleUserRandom = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    this.setState({
      form: {
        ...this.state.form,
        firstName: user.name.first,
        lastName: user.name.last,
        email: user.email,
        avatar: user.picture.medium
      }
    });
  };

  render() {
    if (this.state.loading) {
      return <Loader />;
    }

    return (
      <div className="register">
        <Header />
        <div className="register__img"></div>
        <div className="register__form">
          <Card
            firstName={this.state.form.firstName || "Nombre"}
            lastName={this.state.form.lastName || "Apellido"}
            email={this.state.form.email || "correo@gmail.com"}
            jobtitle={this.state.form.jobTitle || "Titulo_Profesional"}
            avatar={this.state.form.avatar}
          />
          <FormBadge
            change={this.handleChange}
            formValues={this.state.form}
            click={this.handleClick}
            changeAvatar={this.handleChangeAvatar}
            submit={this.handleSubmit}
            success={this.state.success}
            error={this.state.error}
            userRandom={this.handleUserRandom}
          />
        </div>
      </div>
    );
  }
}

export default Edit;
