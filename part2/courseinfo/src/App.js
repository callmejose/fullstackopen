const Course = ({ course }) => {
  let totalExercices = course.parts.reduce(
    (sum, part) => sum + part.exercises,
    0
  )

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>{course.parts.map((part) => {
        return (
          <li key={part.name}>{part.name} {part.exercises}</li>
        )
      })}</ul>
      <p><b>total of {totalExercices} exercises</b></p>
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
      },
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App