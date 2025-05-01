import {create} from 'zustand';
import { format } from "date-fns";
import { creatorPayments, creators, creatorSubscriptions } from "@/static/adminData";
import { useGlobalStore } from './global/useGlobal';


export const changeDateFormat = (data,id)=>data.map((dataItem)=>{
    if(id ==='subscriptions'){
         return {...dataItem,from:format(new Date(dataItem.from),'MMMM do, yyyy'),to:format(new Date(dataItem.to),'MMMM do, yyyy'),
            lastSubscriptions:dataItem.lastSubscriptions.map(subItem=>{
             return {...subItem,from:format(new Date(dataItem.from),'MMMM do, yyyy'),to:format(new Date(dataItem.to),'MMMM do, yyyy')}
         })}
    }else{
     return {...dataItem,date:format(new Date(dataItem.date),'MMMM do, yyyy'),lastPayments:dataItem.lastPayments.map(payItem=>{
         return {...payItem,date:format(new Date(dataItem.date),'MMMM do, yyyy')}
     })}
    }
 })

 const sortItems = (items,sortData)=>{
    return items.sort((a,b)=>{
        if(sortData == 'oldest'){
            return a.id - b.id;
        }else if(sortData == 'newest'){
            return b.id - a.id
        }
        return 0;
    })
 }
 

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