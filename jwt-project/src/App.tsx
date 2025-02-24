import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

class JwtObject {
  encoded: string;
  decoded_header: string = "";
  decoded_payload: string = "";
  decoded_signature: string = "";
 
  constructor(encoded: string) {
    this.encoded = encoded;
    this.assign_values();
  }
 
  greet() {
    return "Hello, " + this.encoded;
  }
  assign_values() {
    this.decoded_header =this.encoded.split(".")[0] // decode the proper part in each one
    this.decoded_payload = this.encoded.split(".")[1]
    this.decoded_signature = this.encoded.split(".")[2]
  }
}

function App() {
  const [count, setCount] = useState(0)

  let input = new JwtObject("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
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
      <div>
        <div id="input_full_encoded">
          <div id="input" contentEditable="true" >
            <span id="input_first_sect">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>
            .
            <span id="input_second_sect">eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ</span>
            .
            <span id="input_third_sect">SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c</span>
          </div>
        </div>
        <div id="input_full_decoded">
          <div id="input_decoded_header" contentEditable="true" >
            <span id="input_first_sect">
            {input.decoded_header}
            </span>
          </div>
          <div id="input_decoded_payload" contentEditable="true" >
            <span id="input_first_sect">
            {input.decoded_payload}
            </span>
          </div>
          <div id="input_decoded_signature" contentEditable="true" >
            <span id="input_first_sect">
            {input.decoded_signature}
            </span>
          </div>
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
