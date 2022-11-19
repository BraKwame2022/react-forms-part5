import React, { Component } from "react";
import './style.css'

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      location: "",
      archive: [
        {
          name: "Kojo Williams",
          phone: "0240069367",
          location: "Apenkwa",
        },
        {
          name: "Ibrahim Dramani",
          phoneNumber: "0240069367",
          location: "Bolga",
        },
      ],
    };
  }
  /*creating functions for variouse inputs*/
  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      phoneNumber: e.target.value,
    });
  };

  handleLocationChange = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  handleonSubmit = (e) => {
    e.preventDefault();
    const { name, phoneNumber, location } = this.state;
    const info = { name, phoneNumber, location };

    this.setState({
      archive: [...this.state.archive, info],
      /*setting the input empty*/
      name: "",
      phoneNumber: "",
      location: "",
    });
    console.log(this.state.archive);
  };
  render() {
    const { name, phoneNumber, location, archive } = this.state;
    return (
      <div className="main-container">
        <form onSubmit={this.handleonSubmit}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={this.handleNameChange}
            placeholder="Name"
          />
          <br />

          <label>Phone Number</label>
          <input
            type="number"
            value={phoneNumber}
            onChange={this.handlePhoneChange}
            placeholder="Number"
          />
          <br />

          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={this.handleLocationChange}
            placeholder="Location"
          />

          <button onSubmit={this.handleonSubmit}>Submit</button>
        </form>

        <div>
          {archive.map((info, index ) => (
            <div key={index} className="container-form">
             Name={info.name} Phone Number={info.phoneNumber} Location={info.location}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default ContactForm;
