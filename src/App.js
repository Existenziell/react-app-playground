import LikeButton from './components/LikeBtn'
import InvertStringSpecial from './components/InvertStringSpecial'
import RotateArray from './components/RotateArray'
import DownloadTime from './components/DownloadTime'
import TimeToType from './components/TimeToType'
import Fibonacci from './components/Fibonacci'

function App() {
  return (
    <div className="text-center pb-16 px-4">
      <header>
        <h1 className='text-4xl mt-4'>React Playground</h1>
      </header>
      <main className="flex flex-col gap-6">
        <InvertStringSpecial />
        <RotateArray />
        <DownloadTime />
        <Fibonacci />
        <TimeToType />
        <LikeButton />
      </main>
    </div>
  )
}

export default App
