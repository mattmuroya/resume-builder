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
        value={firstName}
      />
      <input
        id="lastName"
        type="text"
        placeholder="Last Name"
        value={lastName}
      />
      <input
        id="title"
        type="text"
        placeholder="Title"
        value={title}
      />
      <input
        id="email"
        type="text"
        placeholder="Email"
        value={email}
      />
      <input
        id="phone"
        type="text"
        placeholder="Phone Number"
        value={phone}
      />
    </form>
  )
}

export default PersonalDetailsForm;