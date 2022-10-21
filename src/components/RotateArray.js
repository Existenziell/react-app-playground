import { useEffect, useState } from "react"
import { rotateArray } from "../util/rotateArray"

const RotateArray = () => {
  const [input, setInput] = useState('')
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
      <input type='text' placeholder="CSV style numbers" value={input} onChange={(e) => setInput(e.target.value)} />
      <input type='text' placeholder="Steps" value={steps} onChange={(e) => setSteps(e.target.value)} />
      <p>Output: {output}</p>

    </div>
  )
}

export default RotateArray
