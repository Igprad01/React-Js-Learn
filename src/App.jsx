import React from 'react'
import Foto from './assets/img/foto1.jpg'

const ButtonA = (props) => {
  return (
    <button className={`px-10 py-10 ${props.color}`}>{props.Teks}</button>
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

const Picture = (props) => {
  return(
    <img src={Foto} alt="ini adalah foto" width={props.ukuran}/>
  )
  ;
}

// buat structure folder nanti


function App() {
  return (
    <div className='flex justify-center items-center mt-24 mr-10'>
      <div>
        <ButtonA color = "bg-red-700" Teks = "ini adalah teks"/>
        <ButtonA color = "bg-blue-200" />
        <Teks />
        <Picture ukuran = "10px"/>
        <Picture ukuran = "50px"/>
        <Picture ukuran = "100px"/>
        <Picture ukuran = "200px"/>
      </div>
    </div>
  )
}

export default App
