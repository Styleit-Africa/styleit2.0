import axios from "axios"
import Cookies from "js-cookie"
import { Loader } from "lucide-react"
import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const SubscriptionCard = ({subscription,subscriptions,isShow,btnContent})=>{
    const [isPending,setIsPending] = useState(false);
    const navigate = useNavigate()
    
    const subscribe = async(id)=>{
          setIsPending(true)
            console.log('yes')
             try{
                  const response = await axios.post(`https://styleitafrica.pythonanywhere.com/api/designer/sub`,{plan:`${subscription.amount}`},{
              headers: {
                     Authorization: `Bearer ${Cookies.get('token')}`,
                     'Content-Type': 'application/json',
                     Accept:'application/json'
            }
          })
          if(response.status === 201){
                localStorage.setItem('refno',response?.data?.subscription.reference);
                navigate(`/creator/subscriptions/${id}/proceed`)
          }
           
             }catch(e){
                console.log(e)
             }
    }
    
    return(
        
        <div className={ ` p-5 rounded-xl mt-8 text-center shadow-md ${isShow&&'shadow-none'}`}>
        <h2 className='text-xl font-[500] capitalize'>{subscription.period} plan</h2>
        <p className='mt-8'>{subscription.discount}</p>
        <p className={`mt-9 font-[500] text-lg ${subscription.amount > subscriptions[1].amount && 'text-green-400'}`}>N{subscription.amount}.00</p>
        
        {
            isShow ? 
                <button onClick={()=>subscribe(subscription.id)}
             disabled={isPending} className='capitalize font-[500] text-lg px-0 py-4 rounded-xl block
                w-full mt-9 bg-primary text-white hover:bg-white hover:border hover:border-primary hover:text-primary cursor-pointer'> {isPending?<span className="flex items-center justify-center gap-2"><Loader  className='animate-spin'/> processing...</span>:btnContent}</button>
                                
            :
            <Link to={`/creator/subscriptions/${subscription.id}`} className={`capitalize block ont-[500] text-lg px-0 py-4 rounded-xl  border border-primary
                w-full mt-9 ${subscription.amount > subscriptions[1].amount ? ' bg-primary text-white hover:bg-[#ffffff] hover:text-[#FF617C]':'bg-white  hover:bg-primary hover:text-white'}`}>{btnContent}</Link>
        }
    </div>
    )
}

export default SubscriptionCard