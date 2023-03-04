import { useState } from 'react'
import './App.css'

const NUMBER_OF_TIMES = 5

function App() {
  const [exercise, setExercise] = useState("")

  function runSpinner() {
    let hasRun = 1
    const interval = setInterval(() => {
      hasRun++
      if (hasRun > NUMBER_OF_TIMES) {
        clearInterval(interval);
      }
      var randomItem = data[Math.floor(Math.random()*data.length)];
      setExercise(randomItem)
    }, 100);

    return () => clearInterval(interval);
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

const data = [
  'Spill alle de hvite tangentene fra C til C, og gå opp og ned på tastaturet.',
  'Spill alle de svarte tangentene fra D flat til D flat, og gå opp og ned på tastaturet.',
  'Øv på å spille store skalaer i alle 12 tonearter.',
  'Øv på å spille små skalaer i alle 12 tonearter.',
  'Spill brutte akkorder i alle store og små tonearter.',
  'Øv på å spille oktaver med begge hender.',
  'Øv på å spille tredjedeler med begge hender.',
  'Spill en enkel melodi med høyre hånd mens du spiller en akkordprogresjon med venstre hånd.',
  'Spill en melodi med venstre hånd mens du spiller en akkordprogresjon med høyre hånd.',
  'Øv på å spille stakkato-noter med begge hender.',
  'Øv på å spille legato-noter med begge hender.',
  'Øv på å spille stakkato og legato-noter i samme stykke.',
  'Spill Hanon-øvelser for fingerstyrke og fingerferdighet.',
  'Øv på å spille skalaer i motsatt retning med begge hender.',
  'Spill en enkel sang på gehør.',
  'Øv på å spille akkordinversjoner i alle tonearter.',
  'Øv på å spille arpeggioer i alle tonearter.',
  'Spill en melodi med høyre hånd mens du improviserer med venstre hånd.',
  'Øv på å spille brutte akkorder i alle inversjoner.',
  'Spill en sang du kan godt, men transponer den til en annen toneart.',
  'Øv på å spille med dynamikk, spille både høyt og lavt.',
  'Øv på å spille med forskjellige tempoer, spille både langsomt og raskt.',
  'Spill en enkel sang med bare venstre hånd, og deretter med bare høyre hånd.',
  'Øv på å spille med forskjellige taktarter, som 3/4 og 4/4.',
  'Øv på å spille med forskjellige rytmer, som synkopasjon.',
  'Spill en sang mens du legger til dine egne ornament eller pynt.',
  'Øv på å spille med forskjellige pedalteknikker, som halvpedalering.',
  'Spill en sang med øynene lukket for å øve muskelminnet.',
  'Øv på å spille med en metronom for å forbedre timingen.',
  'Øv på å lese nye musikkstykker på synet.'
]

export default App
