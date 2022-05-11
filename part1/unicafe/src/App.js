import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import { useState } from 'react'

const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  const total = () => (good + neutral + bad)

  return (
    <>
      {total() === 0 ?
        <p><b>no feedback given, Click to vote!</b></p>
        :
        <table>
          <tr><th>statistics</th></tr>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={total()} />
          <StatisticsLine text="sum" value={good - bad} />
          <StatisticsLine text="positive" value={(good / total()) * 100 + "%"} />
        </table>
      }
    </>
  )
}

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>Give me feedback</h2>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
