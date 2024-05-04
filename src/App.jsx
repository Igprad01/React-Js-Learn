import React from 'react'
import Button from './components/button/button'
import Teks from './components/teks/teks'
import Picture from './components/Picture/picture'

function App() {
  return (
    <div className='flex justify-center items-center mt-24 mr-10'>
      <div>
        <Button color = "bg-red-200"/>
        <Button color = "bg-white"/>
        <Button color = "bg-red-200"/>
        <Teks />
        <Picture ukuran = "500px"/>
      </div>
    </div>
  )
}

export default App
