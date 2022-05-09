const Hello = (props) => {
  return (
    <div>
      <p>Hola {props.name}, eres {props.llamado}</p>
    </div>
  )
}

const App = () => {
  const names = ["Jose David", "Agatha", "Asia"]
  return (
    <>
      <h1>Felicidades</h1>
      <Hello name={names[0]} llamado="el papá"/>
      <Hello name={names[1]} llamado="una bb"/>
      <Hello name={names[2]} llamado="una ñiña"/>
    </>
  )
}

export default App;
