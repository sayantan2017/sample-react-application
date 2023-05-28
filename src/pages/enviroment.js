import Axios from 'axios';
const axiosBaseURL = Axios.create({
    baseURL:'https://localhost:5001/api/Gadgets/'
});
export default axiosBaseURL;