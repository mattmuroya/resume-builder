import React from 'react';

class PersonalDetails extends React.Component {
  render() {
    const { firstName, lastName, title, website, phone } = this.props.content; // destructure props
    return (
      <div>
        <div>{firstName} {lastName}</div>
        <div>{title}</div>
        <div>{website}</div>
        <div>{phone}</div>
      </div>
    );
  }
}

export default PersonalDetails;