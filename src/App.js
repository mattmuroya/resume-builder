import React from 'react';
import './App.css';
import ReactToPrint from 'react-to-print';
import PersonalDetails from './components/PersonalDetails';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import Experience from './components/Experience';
import ExperienceForm from './components/ExperienceForm';

class Resume extends React.Component {
  renderExperience() {
    const list = [];
    for (let i = 0; i < this.props.experience.length; i++) {
      list.push(
        <div key={i} >
          <Experience content={this.props.experience[i]}/>
        </div>
      )
    }
    return list;
  }
  render() {
    return (
      <div>
        <div className='resume'>
          <div ref={el => (this.componentRef = el)}>
            <div className="resume-block">
              <PersonalDetails content={this.props.personalDetails} />
            </div>
            <div className="resume-block">
              {this.renderExperience()}
            </div>
          </div>
        </div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#" className="text-blue-700">Print my resume!</a>;
          }}
          content={() => this.componentRef}
        />
      </div>
    );
  }
}

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
        email: 'hello@mattmuroya.com',
        phone: '123-456-7890',
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
          title: 'QA Engineer',
          employer: 'Amazon',
          details: 'Performed QA for Amazon.',
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
          <h4 className="mb-4">Job {i+1}</h4>
          <ExperienceForm content={this.state.experience[i]} onFormChange={this.updateExperience} index={i} onDelete={this.deleteExperience}/>
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
            <PersonalDetailsForm content={this.state.personalDetails} onFormChange={this.updatePersonalDetails} />
          </div>
          <div className="editor-section">
            <h3 className="form-heading">Experience</h3>
            {this.renderExperienceForms()}
            <NewExperienceBtn clickFn={this.createNewExperienceForm} />
          </div>
        </div>
        <div className="resume-window">
          <Resume personalDetails={this.state.personalDetails} experience={this.state.experience} />
        </div>
      </main>
    );
  }
}

export default App;
