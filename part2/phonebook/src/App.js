import { useState } from 'react'
//import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Jose Quintero' }
  ]) 
  const [newName, setNewName] = useState("it's me")

  const addOnClick = (event) => {
    event.preventDefault()
    const newPhonebook = persons.concat(
      {
        name: newName
      }
    )
    setPersons(newPhonebook)
  }

  const inputChange = (event) => setNewName(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={inputChange}/>
        </div>
        <div>
          <button type="submit" onClick={addOnClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
