import React from 'react';

class Experience extends React.Component {
  render() {
    const { title, employer, details, start, end } = this.props.content; // destructure props
    return (
      <div className="resume-sub-block">
        <div>{title}</div>
        <div>{employer}</div>
        <div>{details}</div>
        <div>{start}</div>
        <div>{end}</div>
      </div>
    );
  }
}

export default Experience;