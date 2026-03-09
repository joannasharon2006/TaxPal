import axios from "axios";
import { getToken } from "../utils/auth";

export const downloadReport = async ({ type, month, year }) => {
  const res = await axios.get(
    `https://taxpal-7erx.onrender.com/api/reports?type=${type}&month=${month}&year=${year}`,
    {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }
  );

  const url = window.URL.createObjectURL(new Blob([res.data]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute(
    "download",
    `TaxPal_${type}_Report_${month || year}.pdf`
  );
  document.body.appendChild(link);
  link.click();
};