import LikeButton from './components/LikeBtn'
import InvertStringSpecial from './components/InvertStringSpecial'
import RotateArray from './components/RotateArray'
import DownloadTime from './components/DownloadTime'
import TimeToType from './components/TimeToType'
import Fibonacci from './components/Fibonacci'
import FizzBuzz from './components/FizzBuzz'
import CaesarCipher from './components/CaesarCipher'
import RansomNote from './components/RansomNote'
import PrimeNumbers from './components/PrimeNumbers'

function App() {
  return (
    <div className="pb-16 px-4">
      <header className='text-center'>
        <h1 className='text-4xl mt-6 mb-1'>React Playground</h1>
        <p className='mb-6'>Algorithmic fun...</p>
      </header>
      <main className="flex flex-col gap-10 w-full">
        <RotateArray />
        <InvertStringSpecial />
        <DownloadTime />
        <Fibonacci />
        <TimeToType />
        <CaesarCipher />
        <RansomNote />
        <PrimeNumbers />
        <FizzBuzz />
        <LikeButton />
      </main>
    </div>
  )
}

export default App
