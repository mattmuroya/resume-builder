function PersonalDetailsForm(props) {

  const { firstName, lastName, title, email, phone} = props.content;

  function handleFormChange(e) {
    props.onFormChange(e.target.id, e.target.value);
  }

  return (
    <form onChange={handleFormChange}>
      <input
        id="firstName"
        type="text"
        placeholder="First Name"
        defaultValue={firstName}
      />
      <input
        id="lastName"
        type="text"
        placeholder="Last Name"
        defaultValue={lastName}
      />
      <input
        id="title"
        type="text"
        placeholder="Title"
        defaultValue={title}
      />
      <input
        id="email"
        type="text"
        placeholder="Email"
        defaultValue={email}
      />
      <input
        id="phone"
        type="text"
        placeholder="Phone Number"
        defaultValue={phone}
      />
    </form>
  )
}

export default PersonalDetailsForm;