function App() {
  return (
    <div>
      <Person  
        name="Valcour" 
        age="133"
        hobbies={["flying", "eating", "sleeping"]}
      />
      <Person  
        name="Link" 
        age="17"
        hobbies={["heroing", "stabbing monsters"]}
      />
      <Person  
        name="Ronald McDonald" 
        age="64"
        hobbies={["scaring children", "eating burgers with my feet"]}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))
