import { Button } from '@/components/ui/button'
import { Loader, X } from 'lucide-react'
import React, {useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'
import Cookies from 'js-cookie'
import { useMutation } from '@tanstack/react-query'
import { useAuth } from '@/store/useAuth'
import { toast } from 'sonner'

const Report = ({user,setShowReport}) => {
  const {user:authUser} = useAuth();
  const [reportData,setReportData] = useState({
    custid:"12",
    desid:"8",
    custname:"Razfat",
    desname:"Joy is coming",
    report: ""
})

console.log(authUser)

// const requiredData = user.role = 'designer'?{ 
//     custid:"12",
//     desid:`${user.id}`,
//     custname:"Razfat",
//     desname:`${user.firstName} ${user.lastName}`,
//     report: ""}:
//     { 
//       custid:`${user.id}`,
//     desid:"8",
//     custname:"Razfat",
//     desname:`${user.firstName} ${user.lastName}`,
//     report: ""
//   }

  const report = async(data)=>{
    const response = await axios.post('https://styleitafrica.pythonanywhere.com/api/report/',data,{
       headers: {
                  Authorization: `Bearer ${Cookies.get('token')}`,
                  'Content-Type': 'application/json',
                  Accept:'application/json'
              },
      withCredentials:true
    })
    return response;
  }

  const {mutate,data,error,isPending} = useMutation({
    mutationFn:report,
    onSuccess:(response)=>{
        if(response?.status === 201){
          setShowReport(false)
          toast("Report", {
            description:<p className='text-white'>Post reported successfully <span>&#x1F44D;</span></p>,
              action: {
              label: <X size={16} />,
            },
          })
            }
        }
  })

  const handleReport = ()=>{
    mutate(reportData)
  }
//   {
//     "custid":"12",
//     "desid":"8",
//     "custname":"Razfat",
//     "desname":"Joy is coming",
//     "report": "He is a scammer who convince creator not to receive payment online"
// }

  return (
    <div className='px-5 font-lato py-6  flex justify-center  gap-3 bg-[rgba(0,0,0,0.1)]  items-center z-[999]  fixed top-0  bottom-0 left-0 right-0  overflow-hidden  '>
       <div className="bg-white  shadow-md rounded-md relative z-50 mx-20">
            <div className="border-b-[1px] border-gray-300 pdy-1 px-4">
                   <div className='max-w-[400px] ml-auto  flex items-center justify-between'>
                      <h1 className='font-bold text-xl'>Report {user.lastName}'s Post</h1>
                <X 
                className='cursor-pointer h-16 w-16 scale-[0.5] transition-all duration-300 hover:scale-[0.7]' 
                onClick={()=>setShowReport(false)}
                />
                  </div>
                 </div>
         <div className='   overflow-y-auto  shadow-md rounded-md w-[600px] p-7 py-4'>
     <div className='relative'>
        <Textarea placeholder="What is your report!" value={reportData.report} onChange={(e)=>setReportData({...reportData,report:e.target.value})} className='h-[200px] placeholder:text-xl  shadow-md mt-5 focus-visible:ring-0 '/>
        </div>
                <Button onClick={handleReport} disabled={isPending} className='bg-primary text-white w-full mt-8 py-4 font-[700] capitalize'>{isPending&&<Loader className='animate-spin'/>} kindly report </Button>
        
     
    </div>
       </div>
    </div>
  )
}

export default Report