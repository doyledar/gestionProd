import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.123.55:30300/api",
  headers: {
    "Content-type": "application/json"
  }
});