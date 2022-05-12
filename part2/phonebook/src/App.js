import { useState } from 'react'
//import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: 'Jose Quintero',
      phone: '0123456789'
    }
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

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
        name: newName,
        phone: newPhone
      }
    )
    setPersons(newPhonebook)
    setNewName('')
    setNewPhone('')
  }

  const nameChange = (event) => setNewName(event.target.value)
  const phoneChange = (event) => setNewPhone(event.target.value)
  const inputClick = () => setNewName('')

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input
            type='text'
            value={newName}
            onChange={nameChange}
            placeholder={"write here"} />
        </div>
        <div>
          number: <input
            type='tel'
            value={newPhone}
            onChange={phoneChange} />
        </div>
        <div>
          <button type="submit" onClick={addOnClick}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name} <b>{person.phone}</b></li>
        ))}
      </ul>
    </div>
  )
}

export default App;
