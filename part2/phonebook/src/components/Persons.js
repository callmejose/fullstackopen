const Persons = ({ persons }) => {
    console.log('persons: ', persons)
    return (
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name} <b>{person.phone}</b></li>
        ))}
      </ul>
    )
  }
 export default Persons  