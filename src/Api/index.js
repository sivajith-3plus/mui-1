import axios from "axios"

const api = {
    getBonusCount : async ()=>{
        return await axios.get('/bonus/get-spin-division-count')
    }
}

export default api