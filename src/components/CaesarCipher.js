import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { caesarCipher } from "../util/caesarCipher"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { caesarCipherSnippet } from '../util/codeSnippets'

const CaesarCipher = () => {
  const [phrase, setPhrase] = useState()
  const [number, setNumber] = useState()
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (phrase && number) {
      const output = caesarCipher(phrase, parseInt(number))
      setOutput(output)
    }
  }, [phrase, number])

  return (
    <div className="experiment">
      <h2>Caesar Cipher</h2>
      <p>
        Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer. If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
      </p>
      <input type='text' placeholder="Phrase" onChange={(e) => setPhrase(e.target.value)} />
      <input type='number' placeholder="Number" onChange={(e) => setNumber(e.target.value)} />
      <p className="output">Output: {output}</p>

      <div className="mt-4">
        <SyntaxHighlighter
          language='javascript'
          style={dracula}
          showLineNumbers={true}
          customStyle={{ fontSize: '14px', lineHeight: '20px' }}
        >
          {caesarCipherSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default CaesarCipher
