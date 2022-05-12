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

  export default Course