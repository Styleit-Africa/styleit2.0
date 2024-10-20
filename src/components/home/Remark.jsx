import star from '../../images/star.png';


const Remark =({img})=>{
    return (
        <div className="flex justify-between absolute  bottom-[29px] font-lato font-[700] left-[35px] right-[38px] ">
            <div className='flex basis-[47%] justify-center items-center gap-5 py-3 rounded-[20px] check self-center'>
                <img src={star} alt="" className='w-[36px] h-[36px]' />
                <p className='text-[2rem] '>5.0</p>
            </div>
            <img src={img} alt="" className='w-[80px] h-[80px]'/>
        </div>
    )
}

export default Remark; 
// background: linear-gradient(180deg, #FFFDFD 0%, rgba(255, 255, 255, 0.42) 100%);
