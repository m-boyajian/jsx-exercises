const App = () => {
    return (
      <div>
        <FirstComponent /> 
        <Name name="name" /> 
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById("root"))