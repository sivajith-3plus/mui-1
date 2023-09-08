import axios from "axios";

const api = {
  getBonusCount: async () => {
    return await axios.get("/bonus/get-spin-division-count");
  },
  editBonusCount: async (id, count) => {
    return await axios.put(`/bonus/edit-spin-division-count/${id}/${count}`);
  },
};

export default api;
