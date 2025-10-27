import axios from "axios";
import Cookies from "js-cookie";
import { create } from "zustand";
  

export const useGlobalStore = create((set,get)=>({
    headerHeight:null,
    currentTab:1,
    searchData:'',
    isNavbarOpened:false,
    setIsNavbarOpened:()=>{
      const {isNavbarOpened} = get();
      set({isNavbarOpened:!isNavbarOpened})
    },
    userDashboardSearchData:'',
    setCreators:(creators)=>{
        set({creators})
    },
    setPosts:(posts)=>{
        set({posts})
    },
    setUserDashboardSearchData:(userDashboardSearchData)=>{
        set({userDashboardSearchData})
    },
    searchCreators:async()=>{
        const {userDashboardSearchData,setCreators} = get();
     try{
      const response = await axios.post('https://styleitafrica.pythonanywhere.com/api/search_creator/',{
    search:userDashboardSearchData
  },{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            }
      })
      return response?.data
     }catch(e){
      console.log(e,'e2')
     }
  },
    searchPosts:async()=>{
        const {userDashboardSearchData} = get();
     try{
      const response = await axios.post('https://styleitafrica.pythonanywhere.com/api/postsearch/',{
    search:userDashboardSearchData
  },{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            }
      })
      return response?.data
     }catch(e){
      console.log(e,'e2')
     }
  },
    postModal:false,
    isShared:false,
    searchModal:false,
    setSearchModal:(searchModal)=>set({searchModal}),
    setIsShared:()=>set({isShared:true}),
    setPostModal:()=>set((state)=>({postModal:!state.postModal})),
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

