import Axios from "axios";
import { server } from "../util/Env.util";

export function registerUser(user) {
  return Axios.post(`${server}/auth/local/register`, user);
}

export function loginUser(user) {
  return Axios.post(`${server}/auth/local`, user);
}
