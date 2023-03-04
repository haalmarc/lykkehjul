import { useState } from "react"
import "./App.css"
import { data } from "./data"
import { runForXTimesEveryMilliseconds } from "./utils/runForXTimesEveryMilliseconds"

const NUMBER_OF_TIMES = 5

function App() {
  const [exercise, setExercise] = useState("")

  function setRandomNewExercise() {
    var randomItem = data[Math.floor(Math.random() * data.length)]
    setExercise(randomItem)
  }

  function runSpinner() {
    runForXTimesEveryMilliseconds(10, 150, () => setRandomNewExercise())
  }

  return (
    <div>
      <h1>Spinn og få en øvelse</h1>
      <h2>{exercise}</h2>
      <button onClick={runSpinner}>Spinn</button>
      <ul>
        {data.map((exercise, i) => (
          <li key={i}>{exercise}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
