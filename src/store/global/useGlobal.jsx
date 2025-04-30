import { creatorPayments, creators, creatorSubscriptions } from "@/static/adminData";
import { format } from "date-fns";
import { create } from "zustand";
  
const changeDateFormat = (data,id)=>data.map((dataItem)=>{
   if(id ==='subscriptions'){
        return {...dataItem,from:format(new Date(dataItem.from),'MMMM do, yyyy'),to:format(new Date(dataItem.to),'MMMM do, yyyy'),lastSubscriptions:dataItem.lastSubscriptions.map(subItem=>{
            return {...subItem,from:format(new Date(dataItem.from),'MMMM do, yyyy'),to:format(new Date(dataItem.to),'MMMM do, yyyy')}
        })}
   }else{
    return {...dataItem,date:format(new Date(dataItem.date),'MMMM do, yyyy'),lastPayments:dataItem.lastPayments.map(payItem=>{
        return {...payItem,date:format(new Date(dataItem.date),'MMMM do, yyyy')}
    })}
   }


})

export const useGlobalStore = create((set,get)=>({
    headerHeight:null,
    currentTab:1,
    searchData:'',
    creators,
    creatorSubscriptions:changeDateFormat(creatorSubscriptions,'subscriptions'),
    // creatorSubscriptions:creatorSubscriptions,
    // creatorPayments:creatorPayments,
    creatorPayments:changeDateFormat(creatorPayments,'payments'),

    setCreatorPayments:(creatorPayments)=>{
        const {searchData} = get();
        set(state=>({
            ...state,creatorPayments:searchData==''?changeDateFormat(creatorPayments,'payments'):creatorPayments
            // ...state,creatorSubscriptions:creatorSubscriptions
        }))
    },
    setCreatorSubscriptions:(creatorSubscriptions)=>{
        const {searchData} = get();
        set(state=>({
            ...state,creatorSubscriptions:searchData==''?changeDateFormat(creatorSubscriptions,'subscriptions'):creatorSubscriptions
            // ...state,creatorSubscriptions:creatorSubscriptions
        }))
    },
    sortCreatorSubscriptions:(sortData)=>{
      const {creatorSubscriptions} = get();
      const sortedCreatorSubscriptions = creatorSubscriptions.sort((a,b)=>{
              if(sortData == 'oldest'){
                  return a.id - b.id;
              }else if(sortData == 'newest'){
                  return b.id - a.id
              }
              return 0;
          })
          set({sortedCreatorSubscriptions:sortedCreatorSubscriptions})
        
    },
    setCreators:(creators)=>{
        set(state=>({
            ...state,creators
        }))
    },
    sortCreators:(sortData)=>{
      const {creators} = get();
      const sortedCreators = creators.sort((a,b)=>{
              if(sortData == 'oldest'){
                  return a.id - b.id;
              }else if(sortData == 'newest'){
                  return b.id - a.id
              }
              return 0;
          })
          set({creators:sortedCreators})
        
    },
    setSearchData:(searchData)=>set(state=>({
        ...state,searchData
    })),
    setCurrentTab:(currentTab)=>set(state=>({...state,currentTab})),
    getHeaderHeight:(headerHeight)=>set((state)=>({...state,headerHeight})),
    isSidebarOpened:false,
    setIsSidebarOpened:()=>set((state)=>({
        ...state,isSidebarOpened:!state.isSidebarOpened
    })),
    isAdminOpened:false,
    setIsAdminOpened:()=>set((state)=>({
        ...state,isAdminOpened:!state.isAdminOpened
    })),
}))

