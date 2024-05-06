import React from "react";

const Teks = () => {
    const haha = {
      nama: "AAAAAAAA",
      jurusan: "informatika",
      namaLengkap : "ini adalah nama lengkap",
      tempatLahir : "ini adalah tempat lahir"
    };
    return(
      <div>
        <h1 className={`font-mono text-xl`}>{haha.nama}, {haha.jurusan}, {haha.namaLengkap}</h1>
        <h2>{haha.nama}</h2>
        <h3>{haha.tempatLahir}</h3>
      </div>
    )
  }
  export default Teks

