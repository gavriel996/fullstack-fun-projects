import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div id="input_full">
        <div id="input" contentEditable="true" >
          <span id="input_first_sect">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>
          .
          <span id="input_second_sect">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ</span>
          .
          <span id="input_third_sect">SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</span>
        </div>
      </div>

      {/* <textarea id="w3review" name="w3review" rows="4" cols="50">
        At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
      </textarea> */}

      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
