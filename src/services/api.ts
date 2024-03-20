import axios from "axios";
import toast from "react-hot-toast";
export default async function fetchData() {
  try {
    const response = await axios.get("https://task-api-wtww.onrender.com/data");
    console.log("Data:", response.data);
  } catch (error) {
    toast.error("Error fetching data");
    console.error("Error fetching data:", error.message);
  }
}
