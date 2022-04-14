import axios from "axios";

const KEY = "AIzaSyD4Pc55p0t3zUpqPu6v6YyhePWZbTb2yZU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
