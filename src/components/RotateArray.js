import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { rotateArray } from "../util/rotateArray"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { rotateArraySnippet } from '../util/codeSnippets'

const RotateArray = () => {
  const [input, setInput] = useState()
  const [steps, setSteps] = useState()
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (steps) {
      const output = rotateArray(input.split(','), parseInt(steps))
      setOutput(output.join(', '))
    }
  }, [input, steps])

  return (
    <div className="experiment">
      <h2>Rotate Array k steps</h2>
      <p>
        [1, 2, 3, 4, 5] steps: 1 => [5, 1, 2, 3, 4]<br />
        [1, 2, 3, 4, 5] steps: 3 => [3, 4, 5, 1, 2]
      </p>
      <input type='text' placeholder="CSV style numbers" onChange={(e) => setInput(e.target.value)} />
      <input type='text' placeholder="Steps" onChange={(e) => setSteps(e.target.value)} />
      <p className="output">Output: {output}</p>

      <div className="mt-4">
        <SyntaxHighlighter
          language='javascript'
          style={dracula}
          showLineNumbers={true}
          customStyle={{ fontSize: '14px', lineHeight: '20px' }}
        >
          {rotateArraySnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default RotateArray
