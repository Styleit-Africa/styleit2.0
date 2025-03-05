import React from 'react'
import { happyClients } from '@/static/data'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { CardContent } from '../ui/card'

const HappyClient = () => {
  return (
    <section className="py-28">
               
    <article className="container">
         <h5 className="text-center capitalize text-primary text-4xl font-lato font-[700] mb-7 ">our happy client</h5>
                             <Carousel
             opts={{
                 align: "start",
             }}
             className="w-full px-10 xl:px-0  md:max-w-[1100px] mx-auto"
             >
             <CarouselContent className="" >
                 {happyClients.map((client,index) => (
                 <CarouselItem key={index} className=" lg:basis-1/2 xl:basis-1/2 ">
                         <CardContent className="relative font-lato font-[400] h-[26c0px] min- h-[260px]  my-4 mx-1  rounded-3xl pt-16 pb-4 px-4  text-center border-[2px]l shadow-[1px_1px_6px_#ccc]">
                                         <p className="text-2xl text-left pl-3 pr-9 mb-7">{client.feedback.comment.substring(0,104)} {client.feedback.comment.length > 103 && <span className="text-dsm text-primary">...read more</span> }</p>
                                         <div className=" absolute bottom-4 right-4 flex gap-2 items-end w-[max-content] ">
                                             <h6 className="text-2xl mb-2">{client.name}</h6>
                                             <img src={client.imageUrl} alt=""  className="w-[70px] mr-5"/>
                                         </div>
                         </CardContent>
                 </CarouselItem>
                 ))}
             </CarouselContent>
            <div className="mx-auto w-[max-content] flex gap-5 mt-8 xl:w-auto">
            <CarouselPrevious  className="text-primary text-2xl bg-secondary p-5 static xl:absolute" />
            <CarouselNext className="text-primary text-2xl bg-secondary p-5 static  xl:absolute"/>
            </div>
             </Carousel>


    </article>
</section>
  )
}

export default HappyClient