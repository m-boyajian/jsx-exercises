function Person({age, name, hobbies}) {
  const isEighteen = age >= 18 ? "Please go vote!" : "You must be 18";

  const hobbyList = hobbies.map(hobby => <li>{hobby}</li>);

  return (
    <div>
      <p>Learn some information about this person:</p>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <ul>
          Hobbies:
          {hobbyList}
        </ul>
        <h3>{isEighteen}</h3>
      </ul>
    </div>
  );
}