import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'

function App() {

  interface CardProps {
    nama:string,
    umur:number,
  }
  interface juan extends CardProps{
    alamat:string
  }
  const avt:juan = {
    nama:"Juan P Kuganda",
    umur:20,
    alamat:"jalan R A kartini"
  }

  const arr: string[] = ["Juan", "bapak", "ibu"]

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className='flex gap-2 p-3 bg-slate-300'>
      {arr.map((item,index) => (
       
        <Card key={index} className='p-4 w-[100px]'>
          <h1 className='text-red-600'>{item}</h1>
        </Card>
      ))}
      </div>
      {/* <Card className='w-fit p-5'>
        <h1>{avt.nama}</h1>
        <h1>{avt.umur}</h1>
        <i>{avt.alamat}</i>
      </Card> */}
    </>
  )
}

export default App
