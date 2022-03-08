function PersonalDetails(props) {
    // const { firstName, lastName, title, email, phone } = props.content; // destructure props
    return (
      <div>
        <div>{props.content.firstName} {props.content.lastName}</div>
        <div>{props.content.title}</div>
        <div>{props.content.email}</div>
        <div>{props.content.phone}</div>
      </div>
    );
}

export default PersonalDetails;