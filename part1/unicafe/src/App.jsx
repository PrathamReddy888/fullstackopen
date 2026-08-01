import { useState } from 'react'

// Reusable Button component (Exercise 1.10)
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

// Reusable StatisticLine component rendered as a table row (Exercises 1.10 & 1.11)
const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

// Component responsible for calculations & conditional table display (Exercises 1.8, 1.9 & 1.11)
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad

  // Exercise 1.9: Conditional rendering when no feedback is recorded
  if (total === 0) {
    return <p>No feedback given</p>
  }

  // Exercise 1.7: Calculations
  const average = (good * 1 + neutral * 0 + bad * -1) / total
  const positive = (good / total) * 100

  // Exercise 1.11: Display statistics using an HTML table
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average.toFixed(1)} />
        <StatisticLine text="positive" value={`${positive.toFixed(1)} %`} />
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handleBadClick = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App