import axios from "axios";
import { getToken } from "../utils/auth";

export const fetchDashboard = async () => {
  const res = await axios.get("https://taxpal-7erx.onrender.com/api/dashboard", {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
  return res.data;
};