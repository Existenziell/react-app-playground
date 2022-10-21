import { useEffect, useState } from "react"
import { fibonacci } from "../util/fibonacci"

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
      <p>Output: {output}</p>
    </div>
  )
}

export default Fibonacci
