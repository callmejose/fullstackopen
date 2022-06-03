import { useState } from "react"

const App = () => {
  const [value, setValue] = useState(0)
  
  const setToValue = (newValue) => () => {
    console.log('valor actual', newValue)
    setValue(newValue)
  }
  console.log('rendering...')

  return (
    <div>
      <p>{value}</p>
      <button onClick={setToValue(1000)}>mil</button>
      <button onClick={setToValue(0)}>reset</button>
      <button onClick={setToValue(value + 1)}>+1</button>
    </div>
  );
}

export default App;
