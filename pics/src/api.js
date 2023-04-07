import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID RM8xsTxoFCQp03zTG0vFow-wIX-Ng35RtdwkszhfVdw",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages