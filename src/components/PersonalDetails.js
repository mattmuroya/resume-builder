function PersonalDetails(props) {
    const { firstName, lastName, title, email, phone } = props.content; // destructure props
    return (
      <div>
        <div>{firstName} {lastName}</div>
        <div>{title}</div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    );
}

export default PersonalDetails;