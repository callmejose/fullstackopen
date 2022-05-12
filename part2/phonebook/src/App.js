import { useState } from 'react'
//import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Jose Quintero' }
  ]) 
  const [newName, setNewName] = useState("it's me")

  const nameFinder = (person) => person.name === newName

  const addOnClick = (event) => {
    event.preventDefault()
    console.log(persons.find(nameFinder))

    if (persons.find(nameFinder)) {
      alert(`${newName} is already in the book`)
      return
    }

    const newPhonebook = persons.concat(
      {
        name: newName
      }
    )
    setPersons(newPhonebook)
    setNewName('')
  }

  const inputChange = (event) => setNewName(event.target.value)
  const inputClick = () => setNewName('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={inputChange} onClick={inputClick}/>
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
