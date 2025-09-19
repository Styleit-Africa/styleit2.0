import axios from "axios";
import Cookies from "js-cookie";
import { create } from "zustand";
  

export const useGlobalStore = create((set,get)=>({
    headerHeight:null,
    currentTab:1,
    searchData:'',
    userDashboardSearchData:'',
    creators:[],
    posts:[],
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
      console.log(response.data.results,'search')
      console.log(response.data,'search')
      setCreators(response.data.results)
     }catch(e){
      console.log(e,'e2')
     }
  },
    searchPosts:async()=>{
        const {userDashboardSearchData,setPosts} = get();
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
      console.log(response.data.results,'search')
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

