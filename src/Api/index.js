import axios from "axios";

const api = {
  getBonusCount: async () => {
    return await axios.get("/bonus/get-spin-division-count");
  },
  editBonusCount: async (id, count) => {
    return await axios.put(`/bonus/edit-spin-division-count/${id}/${count}`);
  },
  getAllBonusType: async()=>{
    return await axios.get('/bonus/get-all-day-spin-bonus-types')
  },
  addBonusType: async (data) => {
    return await axios.post('/bonus/add-day-spin-bonus-types',data)
  },
  editBonusType:async (id,data)=>{
    return await axios.put(`/bonus/edit-day-spin-bonus-type/${id}`,data)
  },
  getAllDaySpinBonus:async () => {
    return await axios.get('/bonus/get-all-day-spin-bonuses');
  },
  updateDaySpinBonus:async(id,data)=>{
    return await axios.put(`/bonus/update-day-spin-bonus/${id}`,data)
  },
  addOneDivionToAll:async(data)=>{
    return await axios.post(`bonus/addDivisionToAll`,data)
  },
  removeOneDivisionToAll:async()=>{
    return await axios.post(`bonus/popLastDivisionFromAll`)
  }
};

export default api;
