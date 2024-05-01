import React from 'react'

function Button() {
  return(
    <button className='px-5 py-5 bg-red-800'>ini adalah button</button>
  );
}

function Teks() {
  return(
    <h1>hello world</h1>
  );
}

function App() {
  return (
    <div className='flex justify-center items-center mt-24 mr-10'>
      <div>
        <Button></Button>
        <Teks></Teks>
        <Teks></Teks>
        <Teks></Teks>
      </div>
    </div>
  )
}

export default App
