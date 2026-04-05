import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("Loading...")
  const [count, setCount] = useState(0)

  // Backend se data fetch karo
  useEffect(() => {
    fetch('http://localhost:5000')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message || "Backend connected successfully!")
      })
      .catch(err => {
        setMessage("Backend se connect nahi ho pa raha...")
        console.error(err)
      })
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="/react.svg" className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React + Docker</h1>

      <div className="card">
        <p><strong>Backend Status:</strong> {message}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>

      <p className="read-the-docs">
        Frontend is running in Docker + Connected to Backend
      </p>
    </div>
  )
}

export default App