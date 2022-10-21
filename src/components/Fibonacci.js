import { useEffect, useState } from "react"
import { fibonacci } from "../util/fibonacci"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { fibonacciSnippet } from '../util/codeSnippets'

const Fibonacci = () => {
  const [depth, setDepth] = useState()
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (depth) {
      const output = fibonacci(parseInt(depth))
      setOutput(output)
    }
  }, [depth])

  return (
    <div className="experiment">
      <h2>Fibonacci sequence</h2>
      <p>
        Enter the desired depth.
      </p>
      <input type='number' placeholder="depth" onChange={(e) => setDepth(e.target.value)} />
      <p className="output">Output: {output}</p>

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
    </div>
  )
}

export default Fibonacci
