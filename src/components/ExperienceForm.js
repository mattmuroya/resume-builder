function DeleteExperienceBtn(props) {
  return (
    <button onClick={props.clickFn}>Delete</button>
  )
}

function ExperienceForm(props) {

  const {title, employer, details, start, end} = props.content;

  function handleFormChange(e) {
    props.onFormChange(e.target.id, e.target.value, props.index);
  }

  function handleDeleteBtn(e) {
    e.preventDefault();
    props.onDelete(props.index);
  }

  return (
    <form onChange={handleFormChange}>
      <input
        id="title"
        type="text"
        placeholder="Job Title"
        defaultValue={title}
      />
      <input
        id="employer"
        type="text"
        placeholder="Employer"
        defaultValue={employer}
      />
      <textarea
        id="details"
        placeholder="Details"
        defaultValue={details}
      />
      <input
        id="start"
        type="text"
        placeholder="Start"
        defaultValue={start}
      />
      <input
        id="end"
        type="text"
        placeholder="End"
        defaultValue={end}
      />
      <DeleteExperienceBtn clickFn={handleDeleteBtn}/>
    </form>
  )
}

export default ExperienceForm;