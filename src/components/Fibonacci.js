import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { fibonacci } from "../util/fibonacci"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { fibonacciSnippet } from '../util/codeSnippets'

const Fibonacci = () => {
  const [depth, setDepth] = useState()
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (depth) {
      const output = fibonacci(parseInt(depth))
      setOutput(output)
    }
  }, [depth])

  return (
    <div className="experiment">
      <h2>Fibonacci sequence</h2>
      <p>Return the fibonacci sequence up to the desired depth.</p>
      <input type='number' placeholder="depth" onChange={(e) => setDepth(e.target.value)} />
      <p className="output">Output: {output}</p>

      <button onClick={() => setVisible(!visible)} className='mt-2 button button-sm'>
        {visible ? `Hide Code` : `Unveil code`}
      </button>

      {visible &&
        <div className="mt-4">
          <SyntaxHighlighter
            language='javascript'
            style={dracula}
            showLineNumbers={true}
            customStyle={{ fontSize: '14px', lineHeight: '20px' }}
          >
            {fibonacciSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default Fibonacci
