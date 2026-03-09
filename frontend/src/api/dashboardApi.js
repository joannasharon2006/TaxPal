import axios from "axios";
import { getToken } from "../utils/auth";

export const fetchDashboard = async () => {
  const res = await axios.get("http://localhost:5001/api/dashboard", {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });
  return res.data;
};