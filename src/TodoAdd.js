import { Component } from "react";

export default class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.clearFormData();
  }
  clearFormData() {
    this.formData = {
      title: '',
      desc: '',
      image: ''
    };
  }

  handleTitleChange(event) {
    this.formData.title = event.target.value;
  }

  handleDescChange(event) {
    this.formData.desc = event.target.value;
  }

  handleImageChange(event) {
    const cFiles = event.target.files;
    if (cFiles.length > 0) {
      const fileReader = new FileReader();
      const that = this;
      fileReader.onload = () => {
        that.formData.image = fileReader.result;
      }
      fileReader.readAsDataURL(cFiles[0]);
    } else {
      this.formData.image = '';
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const newDeed = { ...this.formData };
    const date = new Date();
    newDeed.done = false;
    newDeed.created = date.toLocaleString();
    newDeed.key = date.getTime();
    this.props.add(newDeed);
    this.clearFormData();
    event.target.reset();
  }

  render() {
    return (
      <section>
        <h1>Create new task</h1>
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input className="input" onChange={this.handleTitleChange} />
            </div>
          </div>
          <div className="field">
            <label className="field">Note</label>
            <div className="field">
              <textarea className="textarea" onChange={this.handleDescChange} />
            </div>
          </div>
          <div className="field">
            <div className="file">
              <label className="file-label">
                <input className="file-input" type="file" onChange={this.handleImageChange} />
                <span className="file-cta">Choose a file...</span>
              </label>
            </div>
          </div>
          <div className="field is-grouped is-grouped-right">
            <div className="control">
              <input type="reset" className="button is-link is-light" value="Reset" />
            </div>
            <div className="control">
              <input type="submit" className="button is-primary" value="Submit" />
            </div>
          </div>
        </form>
      </section>
    );
  }
}


