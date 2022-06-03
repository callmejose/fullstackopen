const Persons = ({ persons, removeHandler }) => {
  // console.log('persons: ', persons)
  return (
    <ul>
      {persons.map((person) => (
        <li key={person.name}>
          {person.name} <b>{person.number}</b>
          <button onClick={() => removeHandler(person)}>remove</button>
        </li>
      ))}
    </ul>
  )
}
export default Persons
