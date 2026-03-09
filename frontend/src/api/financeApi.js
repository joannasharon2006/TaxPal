import axios from "axios";
import { getToken } from "../utils/auth";

const getAuthHeaders = () => ({
  Authorization: `Bearer ${getToken()}`
});

export const addIncome = async (data) => {
  const res = await axios.post(
    "http://localhost:5001/api/income",
    data,
    { headers: getAuthHeaders() }
  );
  return res.data;
};

export const addExpense = async (data) => {
  const res = await axios.post(
    "http://localhost:5001/api/expense",
    data,
    { headers: getAuthHeaders() }
  );
  return res.data;
};