import axios from "axios";

const GetMovie = () => {
    axios.get("https://freetestapi.com/api/v1/movies/1")
    .then((res) => {
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });
};

export default GetMovie

