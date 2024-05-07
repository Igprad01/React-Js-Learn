import React from 'react'
import Button from './components/ELements/button'
import Teks from './components/ELements/teks'
import Picture from './components/ELements/Picture'

function App() {
  return (
    <div className='flex justify-center items-center mt-24 mr-10'>
      <div>
        <Button color = "bg-red-200"/>
        <Button color = "bg-white"/>
        <Button color = "bg-red-200"/>
        <Teks />
        <Teks />
        <Picture ukuran = "500px"/>
      </div>
    </div>
  )
}

// jadi buat form setelah pekerjaan Proposal Kerja Praktek

export default App
