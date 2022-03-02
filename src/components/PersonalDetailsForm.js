import React from 'react';

class PersonalDetailsForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(e) {
    this.props.onFormChange(e.target.id, e.target.value);
  }

  render() {
    return (
      <form onChange={this.handleFormChange}>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          value={this.props.content.firstName}
        />
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          value={this.props.content.lastName}
        />
        <input
          id="title"
          type="text"
          placeholder="Title"
          value={this.props.content.title}
        />
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={this.props.content.email}
        />
        <input
          id="phone"
          type="text"
          placeholder="Phone Number"
          value={this.props.content.phone}
        />
      </form>
    )
  }
}

export default PersonalDetailsForm;