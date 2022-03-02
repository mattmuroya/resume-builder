import React from 'react';
import './App.css';

import PersonalDetails from './components/PersonalDetails';
import PersonalDetailsForm from './components/PersonalDetailsForm';

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
      educationDetails: [
        {},
        {},
        {},
      ]
    }
    this.updatePersonalDetails = this.updatePersonalDetails.bind(this);
  }

  updatePersonalDetails(id, value) {
    const newDetails = this.state.personalDetails;
    newDetails[id] = value;
    this.setState({
      personalDetails: newDetails
    })
  }

  render() {
    return (
      <main className="main">
        <div className="editor-window">
          <div className="editor-section">
            <h3 className="form-heading">Personal Details</h3>
            <PersonalDetailsForm onFormChange={this.updatePersonalDetails}/>
          </div>
          <div className="editor-section">
            <h3 className="form-heading">Education Details</h3>
            {/*  */}
          </div>
        </div>
        <div className="resume-window">
          <div className="resume">
            <PersonalDetails details={this.state.personalDetails}/>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
