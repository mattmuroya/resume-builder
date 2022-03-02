import React from 'react';
import './App.css';
import PersonalDetails from './components/PersonalDetails';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import Experience from './components/Experience';
import ExperienceForm from './components/ExperienceForm';

class NewExperienceBtn extends React.Component {

  render() {
    return (
      <button onClick={this.props.clickFn}>Add More Experience</button>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personalDetails: {
        firstName: 'Matt',
        lastName: 'Muroya',
        title: 'Software Developer',
        website: 'https://mattmuroya.com',
        phone: '507-250-4659',
      },
      experience: [
        {
          title: 'Software Developer',
          employer: 'Google',
          details: 'Developed software for Google.',
          start: '1/1/21',
          end: '12/31/21'
        },
        {
          title: 'Support Analyst',
          employer: 'Ceridian',
          details: 'Performed support and troubleshooting for Ceridian.',
          start: '1/1/20',
          end: '12/31/20'
        }
      ]
    }
    this.updatePersonalDetails = this.updatePersonalDetails.bind(this);
    this.updateExperience = this.updateExperience.bind(this);
    this.createNewExperienceForm = this.createNewExperienceForm.bind(this);
    this.deleteExperience = this.deleteExperience.bind(this);
  }

  updatePersonalDetails(id, value) {
    const newDetails = this.state.personalDetails;
    newDetails[id] = value;
    this.setState({
      personalDetails: newDetails
    })
  }

  updateExperience(id, value, index) {
    const newDetails = this.state.experience;
    newDetails[index][id] = value;
    this.setState({
      experience: newDetails
    })
  }

  deleteExperience(index) {
    // console.log(this.state.experience);
    const newExperienceState = this.state.experience;
    newExperienceState.splice(index, 1);
    this.setState({
      experience: newExperienceState
    })
  }

  renderExperienceForms() {
    const list = [];
    for (let i = 0; i < this.state.experience.length; i++) {
      list.push(
        <div key={i} >
          <h4>Job {i}</h4>
          <ExperienceForm content={this.state.experience[i]} onFormChange={this.updateExperience} index={i} onDelete={this.deleteExperience}/>
        </div>
      )
    }
    return list;
  }

  renderExperience() {
    const list = [];
    for (let i = 0; i < this.state.experience.length; i++) {
      list.push(
        <div key={i} >
          <Experience content={this.state.experience[i]}/>
        </div>
      )
    }
    return list;
  }

  createNewExperienceForm() {
    const newExperienceState = this.state.experience;
    newExperienceState.push({
      title: '',
      employer: '',
      details: '',
      start: '',
      end: ''
    });
    this.setState({
      experience: newExperienceState
    });
  }

  render() {
    return (
      <main className="main">
        <div className="editor-window">
          <div className="editor-section">
            <h3 className="form-heading">Personal Details</h3>
            <PersonalDetailsForm onFormChange={this.updatePersonalDetails} />
          </div>
          <div className="editor-section">
            <h3 className="form-heading">Education Details</h3>
            {this.renderExperienceForms()}
            <NewExperienceBtn clickFn={this.createNewExperienceForm} />
          </div>
        </div>
        <div className="resume-window">
          <div className="resume">
            <div className="resume-block">
              <PersonalDetails content={this.state.personalDetails} />
            </div>
            <div className="resume-block">
              {this.renderExperience()}
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
