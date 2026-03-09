import axios from "axios";
import { getToken } from "../utils/auth";

const getAuthHeaders = () => ({
  Authorization: `Bearer ${getToken()}`
});

export const addIncome = async (data) => {
  const res = await axios.post(
    "https://taxpal-7erx.onrender.com/api/income",
    data,
    { headers: getAuthHeaders() }
  );
  return res.data;
};

export const addExpense = async (data) => {
  const res = await axios.post(
    "https://taxpal-7erx.onrender.com/api/expense",
    data,
    { headers: getAuthHeaders() }
  );
  return res.data;
};