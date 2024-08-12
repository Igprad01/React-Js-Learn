import axios from "axios";

const GetMovie = async () => {
  try {
    const response = await axios.get('https://freetestapi.com/api/v1/movies');
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default GetMovie

