import { create } from "zustand";

export const useGlobalStore = create((set)=>({
    headerHeight:null,
    getHeaderHeight:(headerHeight)=>set((state)=>({...state,headerHeight})),
    isSidebarOpened:false,
    setIsSidebarOpened:()=>set((state)=>({
        ...state,isSidebarOpened:!state.isSidebarOpened
    }))
}))

