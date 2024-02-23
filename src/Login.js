import { Component } from "react";
import { Navigate } from "react-router-dom";
import { login } from "./api";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
    this.handlePasswordSubmit = this.handlePasswordSubmit.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearFormData();
  }

  clearFormData() {
    this.formData = {
      email: "",
      password: ""
    };
  }

  handleEmailSubmit(event) {
    this.formData.email = event.target.value;
  }

  handlePasswordSubmit(event) {
    this.formData.password = event.target.value;
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    const result = await login(this.formData.email, this.fromData.password);
    if (typeof result === "object") {
      this.props.login(result);
    }
  }

  render() {
    if (this.props.currentUser) {
      return <Navigate to="/" replace />;
    }
    return (
      <section>
        <h1>Registration</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input type="email" onChange={this.handleEmailSubmit} />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input type="password" onChange={this.handlePasswordSubmit} />
            </div>
          </div>
          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <input className="button is-primary" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </section>
    );
  }
}
