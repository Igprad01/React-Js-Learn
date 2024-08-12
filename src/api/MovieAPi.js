import axios from "axios";

const GetMovie = async () => {
    axios.get("https://freetestapi.com/api/v1/movies")
    .then((res) => {
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });
};

export default GetMovie

