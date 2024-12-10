import axios from "axios";

export default
 axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ea47c5e3579a4992af03b9f125501ac8",
  },
});
