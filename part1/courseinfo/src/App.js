const Header = (props) => (
  <>
    <h1>{props.content}</h1>
  </>
)

const Part = (props) => (
  <p>
    {props.partTitle} {props.partExercises}
  </p>
)

const Content = (props) => (
  <p>
    <Part partTitle={props.partsTitles[0]} partExercises={props.partsExercises[0]}/>
    <Part partTitle={props.partsTitles[1]} partExercises={props.partsExercises[1]}/>
    <Part partTitle={props.partsTitles[2]} partExercises={props.partsExercises[2]}/>
  </p>
)

const Total = (props) => (
  <p>
    Number of exercises {props.totalExercises}
  </p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header content={course} />
      <Content partsTitles={[part1, part2, part3]} partsExercises={[exercises1, exercises2, exercises3]}/>
      <Total totalExercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App