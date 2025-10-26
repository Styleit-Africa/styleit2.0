import axios from "axios";
import Cookies from "js-cookie";
import { create } from "zustand";

export const useAdminCreatorStore = create((set,get)=>({
    getCreators: async()=> {
        const response = await axios.get('https://styleitafrica.pythonanywhere.com/api/admin/designers/',{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            }
          })
          return response?.data
    },
    // getClientDetails:async(id)=> {
    //     const response = await axios.get(`https://styleitafrica.pythonanywhere.com/api/customers/${id}/`,{
    //         headers:{
    //           Authorization:`Bearer ${Cookies.get('token')}`,
    //           'Content-Type': 'application/json',
    //           Accept:'application/json'
    //         }
    //       })
    //       return response?.data
    // },
    // getBookings:async()=> {
    //     const response = await axios.get(`https://styleitafrica.pythonanywhere.com/api/admin/appointments`,{
    //         headers:{
    //           Authorization:`Bearer ${Cookies.get('token')}`,
    //           'Content-Type': 'application/json',
    //           Accept:'application/json'
    //         }
    //       })
    //       return response?.data
    // },
}))