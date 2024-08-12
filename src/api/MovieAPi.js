import axios from "axios";


const GetMovie = () => {
    axios.get("")
    .then((res) => {
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });
};

export default GetMovie
