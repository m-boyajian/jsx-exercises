const Tweet = (props) => {
    return (
    <div>
      <p><b>Username:</b> {props.username}</p>
      <p><b>Name:</b> {props.name}</p>
      <p><b>Day of the week:</b> {props.weekday}</p> 
      <p><b>Message:</b> {props.message} </p> 
    </div>
    )
  }