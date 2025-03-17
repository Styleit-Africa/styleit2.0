import { create } from "zustand";

export const useGlobalStore = create((set)=>({
    headerHeight:null,
    currentTab:1,
    setCurrentTab:(currentTab)=>set(state=>({...state,currentTab})),
    getHeaderHeight:(headerHeight)=>set((state)=>({...state,headerHeight})),
    isSidebarOpened:false,
    setIsSidebarOpened:()=>set((state)=>({
        ...state,isSidebarOpened:!state.isSidebarOpened
    }))
}))

