import { useEffect, useState } from "react"
import { timeToType } from "../util/timeToType"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { timeToTypeSnippet } from '../util/codeSnippets'

const TimeToType = () => {
  const [digits, setDigits] = useState()
  const [num, setNum] = useState()
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (digits && num) {
      const output = timeToType(digits.split(''), num.split(''))
      setOutput(output)
    }
  }, [digits, num])

  return (
    <div className="experiment">
      <h2>TimeToType</h2>
      <p>
        Given a string of 10 digits illustrating how the keys are positioned. To type a digit, you start from index zero to the
        index of the target digit. It takes |a - b| milliseconds to move from index a to index b.
        Calculate the number of milliseconds needed to type a number with one finger.
      </p>
      <input type='text' placeholder="digits" onChange={(e) => setDigits(e.target.value)} />
      <input type='number' placeholder="Number to be typed" onChange={(e) => setNum(e.target.value)} />
      <p className="output">Output: {output}</p>

      <div className="mt-4">
        <SyntaxHighlighter
          language='javascript'
          style={dracula}
          showLineNumbers={true}
          customStyle={{ fontSize: '14px', lineHeight: '20px' }}
        >
          {timeToTypeSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
export default TimeToType
