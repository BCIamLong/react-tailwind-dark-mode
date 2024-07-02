import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DarkMode from './components/DarkMode'
import DarkModeProvider from './context/DarkModeContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DarkModeProvider>
        <DarkMode />
        <div className='bg-grey-100'>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card bg-grey-50">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </DarkModeProvider>
    </>
  )
}

export default App
