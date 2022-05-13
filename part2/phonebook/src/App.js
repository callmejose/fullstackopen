import { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'

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
  //console.log('personsToShow: ', personsToShow)

  const addHandler = (event) => {
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

  const nameHandler = (event) => setNewName(event.target.value)
  const phoneHandler = (event) => setNewPhone(event.target.value)
  const searchHandler = (event) => {
    console.log('searchHandler search: ', search)
    setSearch(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Search</h2>
      <Filter filter={search} handler={searchHandler} />
      <input
        type='text'
        value={search}
        onChange={searchHandler}
      />
      <h2>Add a Phone</h2>
      <form>
        <div>
          name: <input
            type='text'
            value={newName}
            onChange={nameHandler}
            placeholder={"write here"} />
        </div>
        <div>
          number: <input
            type='tel'
            value={newPhone}
            onChange={phoneHandler} />
        </div>
        <div>
          <button type="submit" onClick={addHandler}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={personsToShow}/>
    </div>
  )
}

export default App;
