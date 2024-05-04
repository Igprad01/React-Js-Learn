import React from 'react'


const ButtonA = (props) => {
  return (
    <button className={`px-10 py-10 ${props.variant}`}>{props.Teks}</button>
  )
}

const Teks = () => {
  const props = {
    nama: "AAAAAAAA",
    jurusan: "informatika"
  };
  return(
    <div>
      <h1 className={`font-mono text-xl`}>{props.nama}, {props.jurusan}</h1>
      <h2>{props.nama}</h2>
    </div>
  )
}




function App() {
  return (
    <div className='flex justify-center items-center mt-24 mr-10'>
      <div>
        <ButtonA variant = "bg-red-700" Teks = "ini adalah teks"/>
        <ButtonA variant = "bg-blue-200" />
        <Teks />
      </div>
    </div>
  )
}

export default App
