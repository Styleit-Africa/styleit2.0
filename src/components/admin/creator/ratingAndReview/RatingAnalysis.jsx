import Stars from "@/components/global/Stars";
import { Progress } from "@/components/ui/progress"
import { Star } from "lucide-react"

const ratingData = [
  { label: "ONE", stars: 1, value: 12, percentage: 2 },
  { label: "TWO", stars: 2, value: 28, percentage: 5 },
  { label: "THREE", stars: 3, value: 156, percentage: 12 },
  { label: "FOUR", stars: 4, value: "4.5K", percentage: 75 },
  { label: "FIVE", stars: 5, value: 969, percentage: 95 }
];
const RatingAnalysis = ()=>{
    return(
      <div className="flex flex-col-reverse md:flex-row gap-5 font-lato items-center mb-5">
          <div className=" w-full md:w-auto md:flex-[0.5]">
            {ratingData.map((item, index) => (
  <div key={index} className="flex items-center gap-3">
    <div className="w-12 text-xs  mb-5 font-[700] uppercase">
      {item.label}
    </div>
    
    {/* Stars */}
         <Star
          className='w-5 h-5 fill-yellow-400 text-yellow-400 mb-5'/>
    
    {/* Progress Bar */}
    <Progress value={item.percentage} className="flex-1 mx-3 h-3.5 mb-5 bg-sidebar" />
    
    {/* Value */}
    <div className="w-8 text-sm font-medium text-black mb-5">
      {item.value}
    </div>
  </div>
))}
        </div>

        <div className="w-full md:w-auto md:flex-[0.5] mb-5 text-center bg-gradient-to-tr rounded-lg text-lightGray p-10 from-primary to-sidebar to-[35%] ">
            <h3 className="font-[700] text-3xl">4.3</h3>
            <div className="mx-auto w-[max-content]">

                <Stars rating={4} className='gap-5 my-4'/>
            </div>
            <p className="capitalize">50 ratings</p>
        </div>
      </div>
    )
}

export default RatingAnalysis