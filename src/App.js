import {useRef, useState, useEffect} from 'react';
import './App.css';
import { useReactToPrint } from 'react-to-print';
import PersonalDetails from './components/PersonalDetails';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import Experience from './components/Experience';
import ExperienceForm from './components/ExperienceForm';

function Resume(props) {

  function renderExperience() {
    const list = [];
    for (let i = 0; i < props.experience.length; i++) {
      list.push(
        <div key={i} >
          <Experience content={props.experience[i]}/>
        </div>
      )
    }
    return list;
  }

  const componentRef = useRef(); // not sure exactly what this does...

  const handlePrint = useReactToPrint({ // ...see react-to-print doc lol
    content: () => componentRef.current,
  })

  return (
    <div>
      <div className='resume'>
        <div ref={componentRef}>
          <div className="resume-block">
            <PersonalDetails content={props.personalDetails} />
          </div>
          <div className="resume-block">
            {renderExperience()}
          </div>
        </div>
      </div>
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
}

function NewExperienceBtn({ clickFn }) { // destructured props
  return (
    <button onClick={clickFn}>Add More Experience</button>
  )
}

function App() {

  const [personalDetails, setPersonalDetails] = useState({ // object
    firstName: 'Matt',
    lastName: 'Muroya',
    title: 'Software Developer',
    email: 'hello@mattmuroya.com',
    phone: '123-456-7890',
  });

  const [experience, setExperience] = useState([ // array of objexts
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
  ])

  function updatePersonalDetails(id, value) {
    const newDetails = personalDetails;
    newDetails[id] = value;
    setPersonalDetails({...newDetails});
  }

  function updateExperience(id, value, index) {
    const newDetails = experience;
    newDetails[index][id] = value;
    setExperience([...newDetails])
  }

  function deleteExperience(index) {
    const newExperienceState = experience;
    newExperienceState.splice(index, 1);
    setExperience([...newExperienceState]);
  }

  function renderExperienceForms() {
    const list = [];
    for (let i = 0; i < experience.length; i++) {
      list.push(
        <div key={i} >
          <h4 className="mb-4">Job {i+1}</h4>
          <ExperienceForm content={experience[i]} onFormChange={updateExperience} index={i} onDelete={deleteExperience}/>
        </div>
      )
    }
    return list;
  }

  function createNewExperienceForm() {
    const newExperienceState = experience;
    newExperienceState.push({
      title: '',
      employer: '',
      details: '',
      start: '',
      end: ''
    });
    setExperience([...newExperienceState]);
  }

  // useEffect(() => {
  //   console.log(personalDetails);
  // })

  return (
    <main className="main">
      <div className="editor-window">
        <div className="editor-section">
          <h3 className="form-heading">Personal Details</h3>
          <PersonalDetailsForm content={personalDetails} onFormChange={updatePersonalDetails} />
        </div>
        <div className="editor-section">
          <h3 className="form-heading">Experience</h3>
          {renderExperienceForms()}
          <NewExperienceBtn clickFn={createNewExperienceForm} />
        </div>
      </div>
      <div className="resume-window">
        <Resume personalDetails={personalDetails} experience={experience} />
      </div>
    </main>
  );
}

export default App;
