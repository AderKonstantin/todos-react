import { Component } from "react";
import { Navigate } from "react-router-dom";
import { register } from "./auth";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearFormData();
  }

  clearFormData() {
    this.formData = {
      email: '',
      password: ''
    };
  }

  handleEmailChange(event) {
    this.formData.email = event.target.value;
  }

  handlePasswordChange(event) {
    this.formData.password = event.target.value;
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    const result = await register(this.formData.email, this.formData.password);
    if (typeof result !== 'object') {
      console.log(result);
    }
  }

  render() {
    if (this.props.currentUser) {
      return <Navigate to="/" replace />
    } else
      return (
        <section>
          <h1>Registeration</h1>
          <form onSubmit={this.handleFormSubmit}>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input type="email" className="input" onChange={this.handleEmailChange} />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input type="password" className="input" onChange={this.handlePasswordChange} />
              </div>
            </div>
            <div className="field is-grouped is-grouped-right">
              <div className="control">
                <input type="reset" className="button is-link is-light" value="Reset" />
              </div>
              <div className="control">
                <input type="submit" className="button is-primary" value="Register" />
              </div>
            </div>
          </form>
        </section>
      );
  }
}
