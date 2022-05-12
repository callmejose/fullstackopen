const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <ul>{course.parts.map( (part) =>
        <li key={part.name}><strong>{part.name}</strong> {part.exercises}</li>
      )}</ul>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
    <Course course={course}/>
    </div>
  )
}

export default App