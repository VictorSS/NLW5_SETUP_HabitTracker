import { useState } from 'react'
import logoImage from './assets/logo.svg'
import { Plus } from 'phosphor-react'
// import { Habit } from './components/Habit'
import "./styles/global.css"
import { Header } from './components/Header'
import { SummaryTable } from './components/SummaryTable'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className=' w-screen max-w-5xl px-6 flex flex-col gap-16'>
        <Header />
        <SummaryTable />
      </div>
    </div>


  )
}


