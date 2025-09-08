import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import React, {useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'
import Cookies from 'js-cookie'
import { useMutation } from '@tanstack/react-query'
import { useAuth } from '@/store/useAuth'

const Report = ({setShowReport}) => {
  const {user} = useAuth();
  const [reportData,setReportData] = useState({
    custid:"12",
    desid:"8",
    custname:"Razfat",
    desname:"Joy is coming",
    report: ""
})

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
    return await axios.post('https://styleitafrica.pythonanywhere.com/api/report/',data,{
       headers: {
                  Authorization: `Bearer ${Cookies.get('token')}`,
                  'Content-Type': 'application/json',
                  Accept:'application/json'
              },
              withCredentials:true
    })
  }

  const {mutate,data,error} = useMutation({
    mutationFn:report
  })
  console.log('report: '+data)
  console.log(error)

  const handleReport = ()=>{
    mutate(reportData)
    console.log(data)
  }
//   {
//     "custid":"12",
//     "desid":"8",
//     "custname":"Razfat",
//     "desname":"Joy is coming",
//     "report": "He is a scammer who convince creator not to receive payment online"
// }

  return (
    <div className='px-5 font-lato py-6  flex justify-center  gap-3 bg-[rgba(0,0,0,0.1)]  items-center z-[999]  fixed top-0  bottom-0 left-0 right-0  overflow-hidden transition-all duration-300 '>
    
       <div className="bg-white  shadow-md rounded-md relative z-50">
            <div className="border-b-[1px] border-gray-300 pdy-1 px-4">
                   <div className='max-w-[400px] ml-auto  flex items-center justify-between'>
                      <h1 className='font-bold text-xl'>Report Uthman's Post</h1>
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
                <Button onClick={handleReport} disabled={reportData.report?false:true} className='bg-primary text-white w-full mt-8 py-4 font-[700] capitalize'>kindly report </Button>
        
     
    </div>
       </div>
    </div>
  )
}

export default Report