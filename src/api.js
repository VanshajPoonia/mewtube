import axios from "axios";
console.log(process.env.REACT_APP_YT_API_KEY);
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyBest2LuQU5n-XSnmzR1QyGlNQXjydXSzM",
  },
});

export default request;
