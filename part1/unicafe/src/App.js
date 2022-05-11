import { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const total = () => (good + neutral + bad)

  return (
    <>
      {total() === 0 ?
        <p><b>no feedback given, Click to vote!</b></p>
        :
        <>
          <h2>statistics</h2>
          <p>good: {good}</p>
          <p>neutral: {neutral}</p>
          <p>bad: {bad}</p>
          <p>all: {total()}</p>
          <p>sum: {good - bad}</p>
          <p>positive: {(good / total()) * 100}%</p>
        </>
      }
    </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give me feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
