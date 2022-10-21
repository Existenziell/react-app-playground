import { useEffect, useState } from "react"
import { invertStringSpecial } from "../util/invertStringSpecial"

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
      <input type='text' placeholder="Enter String" value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Output: {output}</p>
    </div>
  )
}

export default InvertStringSpecial
