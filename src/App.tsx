import { ChangeEvent, useState, FormEvent } from "react"
import "./App.css"
import { data } from "./data"
import { runForXTimesEveryMilliseconds } from "./utils/runForXTimesEveryMilliseconds"

type ExerciseType = "piano" | "sjakk"

function App() {
  const [activeIndex, setActiveIndex] = useState<number>()
  const [exerciseType, setExerciseType] = useState<ExerciseType>("piano")
  const activeList = data[exerciseType]

  function setRandomNewExercise() {
    var randomIndex = Math.floor(Math.random() * activeList.length)
    setActiveIndex(randomIndex)
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const nextValue = e.target.value as ExerciseType
    setExerciseType(nextValue)
  }

  function runSpinner(e: FormEvent) {
    e.preventDefault()
    runForXTimesEveryMilliseconds(15, 150, () => setRandomNewExercise())
  }

  return (
    <div>
      <h1>Spinn og få en øvelse</h1>
      <h2>
        {typeof activeIndex !== "undefined" ? activeList[activeIndex] : ""}
      </h2>
      <form onSubmit={runSpinner}>
        <div>
          <label>
            Piano
            <input
              type="radio"
              name="exercisetype"
              value="piano"
              onChange={handleChange}
              defaultChecked
            />
          </label>
          <label>
            Sjakk
            <input
              type="radio"
              name="exercisetype"
              value="sjakk"
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Spinn</button>
      </form>
      <ul>
        {activeList.map((exercise, i) => (
          <li key={i} className={activeIndex == i ? "isActive" : ""}>
            {exercise}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
