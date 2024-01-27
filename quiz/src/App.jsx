import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./components/homecomponent"
import Quiz from "./components/quizcomponent"
import Result from './components/resultcomponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      {/* home component */}
      {/* <Home/> */}

      {/* quiz component */}
      {/* <Quiz/> */}

      {/* result component */}
      <Result/>
    </div>
  )
}

export default App
