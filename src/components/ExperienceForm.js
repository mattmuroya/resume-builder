import React from 'react';

class DeleteExperienceBtn extends React.Component {
  render() {
    return (
      <button onClick={this.props.clickFn}>Delete</button>
    )
  }
}

class ExperienceForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleDeleteBtn = this.handleDeleteBtn.bind(this);
  }

  handleFormChange(e) {
    this.props.onFormChange(e.target.id, e.target.value, this.props.index);
  }

  handleDeleteBtn(e) {
    e.preventDefault();
    this.props.onDelete(this.props.index);
  }

  render() {
    return (
      <form onChange={this.handleFormChange}>
        <input
          id="title"
          type="text"
          placeholder="Job Title"
          value={this.props.content.title}
        />
        <input
          id="employer"
          type="text"
          placeholder="Employer"
          value={this.props.content.employer}
        />
        <textarea
          id="details"
          placeholder="Details"
          value={this.props.content.details}
        />
        <input
          id="start"
          type="text"
          placeholder="Start"
          value={this.props.content.start}
        />
        <input
          id="end"
          type="text"
          placeholder="End"
          value={this.props.content.end}
        />
        <DeleteExperienceBtn clickFn={this.handleDeleteBtn}/>
      </form>
    )
  }
}

export default ExperienceForm;