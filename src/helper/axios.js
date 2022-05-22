import axios from "axios";
export const instance = axios.create({
  baseURL: "https://fierce-bastion-31006.herokuapp.com",
});
