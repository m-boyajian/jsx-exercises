// const App = () => {
//     return (
//       <div>
//         <Tweet username="spelunker52" name="Billy Bobby" weekday="Thursday" message="I saw the most incredible bats today!" />
//         <Tweet username="stalactite123" name="Meddy Frecury" weekday="Tuesday" message="Anyone ever cave dive in Devil's Caves in Florida?" />
//         <Tweet username="limestoner11" name="Lillian Billion" weekday="Sunday" message="Hoping to kayak Mammoth Cave soon." />
//       </div>
//     )
//   }

class App extends React.Component {
  render() {
    return (
      <div>
        <Tweet username="spelunker52" name="Billy Bobby" weekday="Thursday" message="I saw the most incredible bats today!" />
        <Tweet username="stalactite123" name="Meddy Frecury" weekday="Tuesday" message="Anyone ever cave dive in Devil's Caves in Florida?" />
        <Tweet username="limestoner11" name="Lillian Billion" weekday="Sunday" message="Hoping to kayak Mammoth Cave soon." />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))