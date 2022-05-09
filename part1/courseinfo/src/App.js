const Header = (props) => (
  <>
    <h1>{props.content}</h1>
  </>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Content = (props) => {
  console.log(props)
  return (
    <p>
      {props.parts.map(p => <Part part={p} />)}
    </p>
  )
}

const Total = (props) => {
  let total = 0
  props.parts.forEach(p => {
    total += p.exercises
  });
  return (
    <p>
      Number of exercises {total}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header content={course} />
      <Content parts={[part1, part2, part3]} />
      <Total parts={[part1, part2, part3]} />
    </div>
  )
}

export default App