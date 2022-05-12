import { useState } from 'react'
//import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Jose Quintero', phone: '0123456789' },
    { name: 'Agatha', phone: '9876543210' },
    { name: 'Asia', phone: '0192837465' },
    { name: 'not me', phone: '0000000' },
    { name: 'me neither', phone: '666' },
  ])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  const nameFinder = (person) => person.name === newName
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(search))
  console.log('personsToShow: ', personsToShow)

  const addOnClick = (event) => {
    event.preventDefault()
    console.log(persons.find(nameFinder))

    if (persons.find(nameFinder)) {
      alert(`${newName} is already in the book`)
      return
    }

    const newPhonebook = persons.concat(
      {
        name: newName.trim,
        phone: newPhone.trim
      }
    )
    setPersons(newPhonebook)
    setNewName('')
    setNewPhone('')
  }

  const nameChange = (event) => setNewName(event.target.value)
  const phoneChange = (event) => setNewPhone(event.target.value)
  const searchChange = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  
  
  return (
    <div>
      <h2>Search</h2>
      <div>
        <p>filter by: 
          <input 
            type='text'
            value={search}
            onChange={searchChange}
          /></p>
      </div>
      <h2>Add a Phone</h2>
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
        {personsToShow.map((person) => (
          <li key={person.name}>{person.name} <b>{person.phone}</b></li>
        ))}
      </ul>
    </div>
  )
}

export default App;
