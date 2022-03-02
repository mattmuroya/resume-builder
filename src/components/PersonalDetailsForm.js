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
        />
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
        />
        <input
          id="title"
          type="text"
          placeholder="Title"
        />
        <input
          id="website"
          type="text"
          placeholder="Website"
        />
        <input
          id="phone"
          type="text"
          placeholder="Phone Number"
        />
      </form>
    )
  }
}

export default PersonalDetailsForm;