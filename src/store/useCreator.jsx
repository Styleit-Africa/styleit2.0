import {create} from 'zustand';
import { format } from "date-fns";
import { creatorPayments, creators, creatorSubscriptions } from "@/static/adminData";
import { useGlobalStore } from './global/useGlobal';
import { changeDateFormat, sortItems } from '@/lib/utils';


export const useCreatorStore = create((set,get)=>({
    creators,
    creatorSubscriptions:changeDateFormat(creatorSubscriptions,'subscriptions'),
    creatorPayments:changeDateFormat(creatorPayments,'payments'),

    setCreatorPayments:(creatorPayments)=>{
        const {searchData} = useGlobalStore.getState();
        set(state=>({
            ...state,creatorPayments:searchData==''?changeDateFormat(creatorPayments,'payments'):creatorPayments
        }))
    },
    setCreatorSubscriptions:(creatorSubscriptions)=>{
        const {searchData} = useGlobalStore.getState();
        set(state=>({
            ...state,creatorSubscriptions:searchData==''?changeDateFormat(creatorSubscriptions,'subscriptions'):creatorSubscriptions
        }))
    },
    sortCreatorSubscriptions:(sortData)=>{
      const {creatorSubscriptions} = get();
      const sortedCreatorSubscriptions = sortItems(creatorSubscriptions,sortData)
          set({sortedCreatorSubscriptions:sortedCreatorSubscriptions})
        
    },
    setCreators:(creators)=>{
        set(state=>({
            ...state,creators
        }))
    },
    sortCreators:(sortData)=>{
      const {creators} = get();
      const sortedCreators =  sortItems(creators,sortData)
          set({creators:sortedCreators})
        
    },
    sortPayments:(sortData)=>{
      const {creatorPayments} = get();
      const sortedPayments = sortItems(creatorPayments,sortData)
          set({creatorPayments:sortedPayments})
        
    }
}))