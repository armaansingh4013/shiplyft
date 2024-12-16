
import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://shiplyft.frappe.cloud/",
  headers: {
    "Content-Type": "application/json",
    'X-Frappe-CSRF-Token': window.csrf_token,
  },
});

export default axiosInstance;