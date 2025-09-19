import Image from '@/components/global/Image'
import { Heart, Star } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const FashionDesignerCard = ({designer}) => {
  const [readMore,setReadMore] = useState(false)
  const description = `  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum temporibus voluptate molestias?`
  return (
     <div className="mt-10 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 w-72 relative pt-16">
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            
                <div className="relative">
                  <Image 
                    src={designer.profil_pic} 
                    alt={designer.creator}
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                 <div className="absolute top-2 -right-1">
                                     <div className="bg-primary text-white p-1.5 rounded-full shadow-lg">
                                       <Star className="w-3 h-3 fill-current" />
                                     </div>
                                   </div>
                </div>
              </div>
              
              <div className="p-6 text-center">
                {/* <h3 className="text-xl font-bold text-gray-800 mb-2">{designer.creator}</h3> */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{designer.first_name} {designer.last_name}</h3>
                <p  className="text-gray-600 mb-4 leading-relaxed">
                  {/* {readMore ? designer.description:designer.description.substring(0,40)+'...'} */}
                  {readMore ? description:description.substring(0,40)+'...'}
                  <button type='button'
                    onClick={()=>setReadMore(!readMore)}
                    className="text-primary hover:text-[#fd526f] ml-2 font-medium underline decoration-pink-300 hover:decoration-primary transition-colors duration-200"
                  >
                    {readMore?'read less':'read more'}
                  </button>
                </p>

                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Heart className="w-4 h-4" />
                    {/* <span className="text-sm">{designer.rating.toFixed(1)} rating</span> */}
                    <span className="text-sm">4.8 rating</span>
                  </div>
                </div>
                
                <button 
                //   onClick={() => handleBookAppointment(designer.name)}
                  className="w-full bg-primary hover:bg-[#fd526f] text-white px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  <Link to='/client/bookAppointment'>Book Appointment</Link>
                </button>
              </div>
            </div>
  )
}

export default FashionDesignerCard