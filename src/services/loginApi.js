import axios from "axios";

const LoginApi = async(email, password) => {
  const res= await axios.post(process.env.REACT_APP_API_URL, { email, password })
  return await res.data.token;
};

export default LoginApi;
