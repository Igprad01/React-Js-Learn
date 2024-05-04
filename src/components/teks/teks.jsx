import React from "react";

const Teks = () => {
    const haha = {
      nama: "AAAAAAAA",
      jurusan: "informatika",
      namaLengkap : "ini adalah nama lengkap"
    };
    return(
      <div>
        <h1 className={`font-mono text-xl`}>{haha.nama}, {haha.jurusan}, {haha.namaLengkap}</h1>
        <h2>{haha.nama}</h2>
      </div>
    )
  }


  export default Teks