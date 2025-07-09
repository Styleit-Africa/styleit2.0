import { create } from "zustand";
  

export const useGlobalStore = create((set,get)=>({
    headerHeight:null,
    currentTab:1,
    searchData:'',
    currentDashboardTab:0,
    setCurrentDashboardTab:(currentDashboardTab)=>{
        set({currentDashboardTab})
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

