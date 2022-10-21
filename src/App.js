import './css/index.css'
import LikeButton from './components/LikeBtn'
import InvertStringSpecial from './components/InvertStringSpecial'
import RotateArray from './components/RotateArray'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Playground</h1>
      </header>
      <main className="App-main">
        <LikeButton />
        <InvertStringSpecial />
        <RotateArray />
      </main>
    </div>
  )
}

export default App
