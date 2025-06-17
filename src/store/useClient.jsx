import {create} from 'zustand';
import { bookings, complaints, creators as clients } from "@/static/adminData";
import { useGlobalStore } from './global/useGlobal';
import { changeDateFormat, sortItems } from '@/lib/utils';
console.log(clients,'here')

export const useClientStore = create((set,get)=>({ 
    currentMessages:complaints[0],
    setCurrentMessages:(index)=>{
        const {complaints} = get();
        set(state=>({
            ...state,currentMessages:complaints[index]
        }))
    },
    complaints,
    clients,
    bookings:changeDateFormat(bookings,'bookings'),
    setClients:(clients)=>{
        set(state=>({
            ...state,clients
        }))
    },
    setBookings:(bookings)=>{
        const {searchData} = useGlobalStore.getState();
        set(state=>({
            ...state,bookings:searchData==''?changeDateFormat(bookings,'bookings'):bookings
        }))
    },
    setComplaints:(complaints)=>{
        set(state=>({
            ...state,complaints
        }))
    },
    // sort
     sortClients:(sortData)=>{
      const {clients} = get();
      const sortedClients =  sortItems(clients,sortData)
        set({clients:sortedClients})  
    },
     sortBookings:(sortData)=>{
      const {bookings} = get();
      const sortedBookings =  sortItems(bookings,sortData)
        set({bookings:sortedBookings})  
    },
     sortComplainants:(sortData)=>{
      const {complaints} = get();
      const sortedComplainants =  sortItems(complaints,sortData)
        set({complaints:sortedComplainants})  
    },
   
}))