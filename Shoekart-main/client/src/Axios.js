import axios from "axios";

const Axios = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}`,
  // baseURL: 'http://localhost:5000'
});

export default Axios;
