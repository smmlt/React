import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ByFunctionList from "./components/ByFunction/ByFunctionList.jsx";
import ByAnonimList from "./components/ByAnonim/ByAnonimList.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ByAnonim</h1>
      <ByAnonimList/>

      <h1>ByFunction</h1>
      <ByFunctionList/>
    </>
  )
}

export default App
