import { useEffect, useState } from "react"
import { invertStringSpecial } from "../util/invertStringSpecial"
import { invertStringSpecialSnippet } from '../util/codeSnippets'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import SyntaxHighlighter from 'react-syntax-highlighter'

const InvertStringSpecial = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  useEffect(() => {
    const output = invertStringSpecial(input)
    setOutput(output)
  }, [input])

  return (
    <div className="experiment">
      <h2>Invert string - but only the letters</h2>
      <p>`__aa**bb))cc` => `__cc**bb))aa`</p>
      <input type='text' placeholder="Enter String" onChange={(e) => setInput(e.target.value)} />
      <p className="output">Output: {output}</p>

      <div className="mt-4">
        <SyntaxHighlighter
          language='javascript'
          style={dracula}
          showLineNumbers={true}
          customStyle={{ fontSize: '14px', lineHeight: '20px' }}
        >
          {invertStringSpecialSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default InvertStringSpecial
