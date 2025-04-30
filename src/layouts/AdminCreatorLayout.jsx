import React, { useState } from "react";
import glass from '@/images/search-normal.png';
import { Outlet, useLocation } from "react-router-dom";
import SearchBar from "@/components/global/SearchBar";
import { SortAsc } from "lucide-react";
import { useGlobalStore } from "@/store/global/useGlobal";


const AdminCreatorLayout =()=>{
  const [sortOptions,setSortOptions] = useState(false);
  const {sortCreators,sortCreatorSubscriptions} = useGlobalStore(state=>state)
  const {pathname} = useLocation();
  const path = pathname.split('/');
  console.log(path)
  console.log(pathname)
  const handleSort = (e)=>{
    if(pathname.endsWith('subscriptions')){
      sortCreatorSubscriptions(e.target.dataset.id)
    }else{
      sortCreators(e.target.dataset.id)
    } 
  }
  
    return(
        <>  
          <section  className="px-5 py-10">
            {
              path[path.length-1] !== 'profile'&&(
                <div className="px-4 flex justify-between mb-8"> 
                <SearchBar
                      placeholder='Search for creators'
                      imageIcon={glass}
                      styles={{
                      img:'absolute top-3 left-3.5  w-[20px]',
                      input:'pl-10 w-full border placeholder-gray-400 border-gray-500 outline-none  rounded-lg h-12'
                  }} />            
                 <div className=" basis-[12%] relative ">
                 <div className="flex justify-between border border-gray-500 px-6 py-2 rounded-md" 
                 onClick={()=>setSortOptions(!sortOptions)}>
                    <SortAsc/>
                    <p className="text-xl">filter</p>
                  </div> 
                  <div className={`absolute top-12 right-0 capitalize  bg-white shadow-md rounded-md  overflow-hidden transition-all duration-400 ${sortOptions ? 'h-200px':'h-0'}`}>
                    <p className="border-b py-2 pl-4 pr-12 border-gray-400" data-id="oldest" onClick={(e)=>handleSort(e)}>oldest</p>
                    <p className="border-b py-2 pl-4 pr-12 border-gray-400" data-id="newest" onClick={(e)=>handleSort(e)}>newest</p>
                  </div>
                 </div>
        </div>
              )
            }
          
            <Outlet/>
          </section>

        </>
    )
}
export default AdminCreatorLayout