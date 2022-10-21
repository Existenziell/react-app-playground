import { useEffect, useState } from "react"
import { invertStringSpecial } from "../util/invertStringSpecial"
import '../css/index.css'

const InvertStringSpecial = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  // const string = 'abc*zy+_&kljh'
  // const result = invertStringSpecial(string)
  // console.log("input:", string);
  // console.log("output:", result);

  useEffect(() => {
    const output = invertStringSpecial(input)
    setOutput(output)
  }, [input])

  return (
    <div className="experiment">
      <h2>Invert string - but only the letters</h2>
      <input type='text' placeholder="Enter String" value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Output: {output}</p>
    </div>
  )
}

export default InvertStringSpecial
