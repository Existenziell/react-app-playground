import { useEffect, useState } from "react"
import { downloadTime } from "../util/downloadTime"

const DownloadTime = () => {
  const [filesize, setFilesize] = useState()
  const [trend, setTrend] = useState()
  const [observations, setObservations] = useState()
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (observations && trend && filesize) {
      const output = downloadTime(filesize, trend.split(','), observations)
      setOutput(output)
    }
  }, [filesize, trend, observations])

  return (
    <div className="experiment">
      <h2>Estimate the remaining download time in minutes.</h2>
      <p>
        X - Filesize<br />
        [B] - Trend - Array of integers listing the bytes downloaded at each minute<br />
        Z - Last Z observations to be considered
      </p>
      <input type='number' placeholder="X: 100" value={filesize} onChange={(e) => setFilesize(e.target.value)} />
      <input type='text' placeholder="[B]: 8,7,6,9,4,11" value={trend} onChange={(e) => setTrend(e.target.value)} />
      <input type='number' placeholder="Z: 2" value={observations} onChange={(e) => setObservations(e.target.value)} />
      <p>Output: {output ? `${output} minutes` : ``}</p>
    </div>
  )
}
export default DownloadTime
