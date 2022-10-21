import SyntaxHighlighter from 'react-syntax-highlighter'
import { useEffect, useState } from "react"
import { ransomNote } from "../util/ransomNote"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { ransomNoteSnippet } from '../util/codeSnippets'

const RansomNote = () => {
  const [note, setNote] = useState()
  const [magazine, setMagazine] = useState('')
  const [output, setOutput] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (note && magazine) {
      const output = ransomNote(note, magazine)
      setOutput(output)
    }
  }, [note, magazine])

  return (
    <div className="experiment">
      <h2>RansomNote</h2>
      <p>
        Given a magazine of words and a ransom note, determine if it&apos;s possible to “cut out” and create the ransom note from the magazine words.
      </p>
      <input type='text' placeholder="Note" onChange={(e) => setNote(e.target.value)} />
      <input type='text' placeholder="Magazine" onChange={(e) => setMagazine(e.target.value)} />
      <p className="output">Output: {output.toString()}</p>

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
            {ransomNoteSnippet}
          </SyntaxHighlighter>
        </div>
      }
    </div>
  )
}

export default RansomNote
