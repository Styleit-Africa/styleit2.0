import { useGlobalStore } from '@/store/global/useGlobal'
import React, { useEffect, useState } from 'react'
import Image from '../Image';
import { Search, X } from 'lucide-react';
import SearchedCreators from '@/components/dashboard/searchItems/SearchedCreators';
import SearchedPosts from '@/components/dashboard/searchItems/SearchedPosts';
import m_logo from '../../../images/m_logo.png'
import { useQuery } from '@tanstack/react-query';


const SearchModal = ({page,creators}) => {
    const [tabValue,setTabValue] = useState('designers')
    const {searchModal,setSearchModal,searchCreators,searchPosts,
        userDashboardSearchData,setUserDashboardSearchData} = useGlobalStore();

    useEffect(()=>{
        searchPosts()
        searchCreators()
    },[userDashboardSearchData])

    
  const {data,error,isLoading} = useQuery({
        queryKey:['search-creators',userDashboardSearchData],
        queryFn:searchCreators,
        staleTime:1000*60*5,
        enabled: !!userDashboardSearchData,
        onSuccess: () => console.log("Fetched from API"),
      })
  const {data:searchPostData,error:postError,isLoading:isPostLoading} = useQuery({
        queryKey:['search-post',userDashboardSearchData],
        queryFn:searchPosts,
        staleTime:1000*60*5,
        enabled: !!userDashboardSearchData,
        onSuccess: () => console.log("Fetched from API,post"),
      })
      console.log(searchPostData)
 
  return (
    <section>
            {
                searchModal&&<div className='px-5 font-lato py-6  flex justify-center  gap-3 bg-[rgba(0,0,0,0.1)]   z-[999]  fixed top-0  bottom-0 left-0 right-0  overflow-hidden transition-all duration-300 '>
            
            <div className="overflow-hidden  bg-white w-[1200px] shadow-md rounded-md relative z-50 p-6">
               
                     <div className="flex justify-between items-center mb-3">
                  <div>
                      <Image src={m_logo} />
                  </div>
                  <X  className="h-8 w-8 scale-[0.8] transition-all duration-300 hover:scale-[1.5] cursor-pointer" onClick={()=>setSearchModal(false)}/>
                </div>
                        <div className="relative ">
                                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                  <input
                                  onChange={(e)=>setUserDashboardSearchData(e.target.value)}
                                    type="text"
                                    placeholder="search..."
                                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none"
                                  />
                                </div>
               {
                page === 'user-dashboard'&&<div>
        
                    <div className="flex gap-3 mt-4 font-lato font-[500]">
                        <div className='basis-[15%] '>
                        <button type='button' onClick={()=>setTabValue('designers')} className={`px-9 shadow-md py-4 rounded-md capitalize transition-all duration-300   ${tabValue !== 'designers'?'bg-white text-black hover:bg-primary hover:text-white':'text-white hover:bg-white bg-primary'} hover:text-black text-md`}>designers</button>

                        </div>
                        <div className='basis-[15%] '>
                        <button type='button' onClick={()=>setTabValue('posts')} className={`px-9 shadow-md py-4 rounded-md capitalize transition-all duration-300   ${tabValue !== 'posts'?'bg-white text-black hover:bg-primary hover:text-white':'text-white hover:bg-white bg-primary'}  hover:text-black text-md`}>posts</button>

                        </div>
                    </div>
                   
        
                  <div className="h-[400px] overflow-y-scroll py-4 mt-4">
                    {
                      tabValue === 'designers'&& <SearchedCreators isLoading={isLoading} creators={data?.results}/>
                    }
                    {
                      tabValue === 'posts'&&  <SearchedPosts isLoading={isPostLoading} posts={searchPostData?.results} />
                    }
                  
                  </div>
                </div>
               }
                {
                page === 'home'&&<div className='mt-10'>
                    <SearchedCreators isLoading={isLoading} creators={data?.results}/>
                </div>
                }
               </div>
            </div> 
              }
    </section>
  )
}

export default SearchModal