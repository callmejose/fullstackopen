const Course = ({ courses }) => {
  const exercisesReducer = (sum, part) => sum + part.exercises

  return (
    <><h1>Web development course</h1>
      <ul>{courses.map((course) => (
        <li key={course.name}><div>
          <h2>{course.name}</h2>
          <ul>{course.parts.map((part) => {
            return (
              <li key={part.name}>{part.name} {part.exercises}</li>
            )
          })}</ul>
          <p><b>total of {course.parts.reduce(exercisesReducer, 0)} exercises</b></p>
        </div></li>
      ))}</ul>
    </>
  )
}

const App = () => {
  const courses = [{
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
  },
  {
    name: 'Node.js',
    parts: [
      {
        name: 'Routing',
        exercises: 3
      },
      {
        name: 'Middlewares',
        exercises: 7
      }
    ]
  }]

  return (
    <div>
      <Course courses={courses} />
    </div>
  )
}

export default App