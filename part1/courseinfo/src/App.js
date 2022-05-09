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
  const parts = [
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

  return (
    <div>
      <Header content={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App