import React, { useState } from "react";
import glass from '@/images/search-normal.png';
import { Outlet, useLocation, useParams } from "react-router-dom";
import SearchBar from "@/components/global/SearchBar";
import { SortAsc } from "lucide-react";
import { useCreatorStore } from "@/store/useCreator";


const AdminCreatorLayout =()=>{
  const [sortOptions,setSortOptions] = useState(false);
  const {sortCreators,sortPayments,sortCreatorSubscriptions} = useCreatorStore(state=>state)
  const {id} = useParams();
  const {pathname} = useLocation();
  const path = pathname.split('/');

  const handleSort = (e)=>{
    if(pathname.endsWith('subscriptions')||pathname.endsWith(id)){
      sortCreatorSubscriptions(e.target.dataset.id)
    }else if(pathname.endsWith('creators')){
      sortCreators(e.target.dataset.id)
    }else if(pathname.endsWith('payments')||pathname.endsWith(id)){
      sortPayments(e.target.dataset.id)
    }else{
      sortCreatorSubscriptions(e.target.dataset.id)
    }
  }
  
    return(
        <>  
          <section  className="px-5 py-10">
            {
              path[path.length-1] !== 'profile'&&(
                 <div className="md:px-4 md:flex justify-between mb-8"> 
                <SearchBar
                      placeholder='Search for creators'
                      imageIcon={glass}
                      styles={{
                      img:'absolute top-3 left-3.5  w-[20px]',
                      parent:'ml-0',
                      input:'pl-10 w-full border placeholder-gray-400 border-gray-500 outline-none  rounded-lg h-12'
                  }} />            
                 <div className=" basis-[12%] relative mt-3 md:mt-0">
                 <div className="flex justify-between border border-gray-500 px-6 py-2 rounded-md" 
                 onClick={()=>setSortOptions(!sortOptions)}>
                    <SortAsc/>
                    <p className="text-xl cursor-pointer">filter</p>
                  </div> 
                  <div className={`mt-4 md:mt-0 cursor-pointer md:absolute top-12 right-0 z-50 capitalize  bg-white shadow-md rounded-md  overflow-hidden transition-all duration-400 ${sortOptions ? 'h-200px':'h-0'}`}>
                    <p className="border-b py-4 md:py-2 pl-4 pr-12 border-gray-400" data-id="oldest" onClick={(e)=>handleSort(e)}>oldest</p>
                    <p className=" py-4 md:py-2 pl-4 pr-12 " data-id="latest" onClick={(e)=>handleSort(e)}>latest</p>
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