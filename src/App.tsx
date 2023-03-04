import { useState } from "react"
import "./App.css"
import { data } from "./data"
import { runForXTimesEveryMilliseconds } from "./utils/runForXTimesEveryMilliseconds"

const NUMBER_OF_TIMES = 5

function App() {
  const [activeIndex, setActiveIndex] = useState<number>()

  function setRandomNewExercise() {
    var randomIndex = Math.floor(Math.random() * data.length)
    setActiveIndex(randomIndex)
  }

  function runSpinner() {
    runForXTimesEveryMilliseconds(15, 150, () => setRandomNewExercise())
  }

  return (
    <div>
      <h1>Spinn og få en øvelse</h1>
      <h2>{typeof activeIndex !== "undefined" ? data[activeIndex] : ""}</h2>
      <button onClick={runSpinner}>Spinn</button>
      <ul>
        {data.map((exercise, i) => (
          <li key={i} className={activeIndex == i ? "isActive" : ""}>
            {exercise}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
