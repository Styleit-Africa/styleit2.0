import { Link } from "react-router-dom"


const SubscriptionCard = ({subscription,subscriptions,isShow,btnContent})=>{
    return(
        
        <div className={ ` p-5 rounded-xl mt-8 text-center shadow-md ${isShow&&'shadow-none'}`}>
        <h2 className='text-xl font-[500] capitalize'>{subscription.period} plan</h2>
        <p className='mt-8'>{subscription.discount}</p>
        <p className={`mt-9 font-[500] text-lg ${subscription.amount > subscriptions[1].amount && 'text-green-400'}`}>N{subscription.amount}.00</p>
        
        {
            isShow ? 
            <Link to={`/subscriptions/${subscription.id}/${btnContent === 'Pay now'? 'pay':'proceed'}`} className='capitalize font-[500] text-lg px-0 py-4 rounded-xl block
                w-full mt-9 bg-primary text-white hover:bg-white hover:border hover:border-primary hover:text-primary'>{btnContent}</Link>
            :
            <Link to={`/subscriptions/${subscription.id}`} className={`capitalize block ont-[500] text-lg px-0 py-4 rounded-xl  border border-primary
                w-full mt-9 ${subscription.amount > subscriptions[1].amount ? ' bg-primary text-white hover:bg-[#ffffff] hover:text-[#FF617C]':'bg-white  hover:bg-primary hover:text-white'}`}>{btnContent}</Link>
        }
    </div>
    )
}

export default SubscriptionCard