import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import { Notification } from './components/Notification'
import Persons from './components/Persons'
import services from './components/services'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')
  const [alert, setAlert] = useState(null)
  // ({
  //   type: 'error',
  //   text: 'initial error'
  // })

  useEffect(() => {
    console.log('effect..')
    services.getAll()
      .then(response => {
        console.log('promise fulfilled: ', response)
        setPersons(response)
      })
  }, [])

  // console.log('rendered..', persons)
  const nameFinder = (person) => person.name === newName
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(search))
  // console.log('personsToShow: ', personsToShow)

  const addHandler = (event) => {
    event.preventDefault()
    const existingPerson = persons.find(nameFinder)
    console.log('adding a person..')

    const newPerson = {
      name: newName.trim(),
      number: newPhone.trim()
    }

    if (existingPerson) {
      if (window.confirm(`${existingPerson.name} is already in the book, do you want to update his number?`)) {
        console.log('update person: ', existingPerson)
        services.update(existingPerson.id, newPerson)
          .then(response => {
            console.log('updated person in db: ', response)
            setPersons((oldPhonebook) => {
              const newPhonebook = [...oldPhonebook]
              const indexExistingPerson = persons.findIndex(nameFinder)
              newPhonebook[indexExistingPerson] = { ...existingPerson, number: newPhone.trim() }
              return newPhonebook
            })
            setAlert({
              type: 'success',
              text: `${existingPerson.name} updated to database`
            })
            setTimeout(() => {
              setAlert(null)
            }, 5000)
          })
          .catch(
            setAlert({
              type: 'error',
              text: `${existingPerson.name} already deleted from database`
            }),
            setTimeout(() => {
              setAlert(null)
            }, 5000)
          )
      }
      return
    }

    console.log('new person: ', newPerson)
    services.create(newPerson)
      .then(response => {
        console.log('new person in db: ', response)
        setPersons((oldPhonebook) => oldPhonebook.concat(response))
        setNewName('')
        setNewPhone('')
        setAlert({
          type: 'success',
          text: `${newPerson.name} added to database`
        })
        setTimeout(() => {
          setAlert(null)
        }, 5000)
      })
      .catch(error => {
        console.log(error.response.data.error)
        setAlert({
          type: 'error',
          text: error.response.data.error
        })
        setTimeout(() => {
          setAlert(null)
        }, 5000)
      })
  }
  const removeHandler = (personToDelete) => {
    console.log('removing from db: ', personToDelete.id)
    if (window.confirm(`${personToDelete.name} will be deleted from the database COMPLETLY`)) {
      services.remove(personToDelete.id)
        .then(response => {
          console.log('person removed from db: ', personToDelete.id)
          setPersons(persons.filter(person => person.id !== personToDelete.id))
        })
    }
  }

  const nameHandler = (event) => setNewName(event.target.value)
  const phoneHandler = (event) => setNewPhone(event.target.value)
  const searchHandler = (event) => {
    console.log('search: ', event.target.value)
    setSearch(event.target.value.toLowerCase())
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification alert={alert} />
      <h2>Search</h2>
      <Filter filter={search} handler={searchHandler} />
      <h2>Add a Phone</h2>
      <form>
        <div>
          name: <input
            type='text'
            value={newName}
            onChange={nameHandler}
            placeholder='write here'
                />
        </div>
        <div>
          number: <input
            type='tel'
            value={newPhone}
            onChange={phoneHandler}
                  />
        </div>
        <div>
          <button type='submit' onClick={addHandler}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={personsToShow} removeHandler={removeHandler} />
    </div>
  )
}

export default App
