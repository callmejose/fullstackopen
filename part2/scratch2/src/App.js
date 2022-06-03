import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './components/dbcalls'
import { Notification } from './components/Notification'


const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('write a note..')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    console.log('effect')
    noteService.getAll()
      .then(initialNotes => {
      console.log('promise fulfilled', initialNotes)
      setNotes(initialNotes)
    })
  }, [])

  const toggleImportance = (noteId) => {
    console.log(`importance of note ${noteId} needs to be toggled`)
    const note = notes.find(n => n.id === noteId)
    const changedNote = {...note, important: !note.important}

    noteService.update(noteId, changedNote)
      .then(response => {
      setNotes(notes.map(note => note.id !== noteId ? note : response))
    })
    .catch(error => {
      setErrorMessage(`Note '${note.content}' was already removed from server`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000);
      setNotes(notes.filter(n => n.id !== noteId))
    })
  }

  const addNote = (event) => {
    event.preventDefault()
    const objNewNote = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    noteService.create(objNewNote)
      .then(response => {
        setNotes((oldNotes) => oldNotes.concat(response))
        setNewNote('')
      })
    // setNotes((oldNotes) => (oldNotes.concat(objNewNote)))
    // setNewNote('')
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  const onChange = (event) => {
    setNewNote(event.target.value)
  }

  const onClick = () => {
    setNewNote('')
  }

  const clickButton = () => {
    setShowAll(!showAll)
  }

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage}/>
      <button onClick={clickButton}>{
        showAll ? 'important' : 'show all'
      }</button>
      <ul>
        {notesToShow.map(note =>
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportance(note.id)} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input onChange={onChange} value={newNote} onClick={onClick} />
        <button>save</button>
      </form>
    </div>
  )
}

export default App;
