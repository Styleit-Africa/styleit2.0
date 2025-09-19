import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/static/data"

const FrequentlyAskedQuestions = ()=> {
  return (
    <div className="max-w-[1000px] mx-auto ">
         <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
        {
            faqs.map(faq=>(
                <div>
                    <AccordionItem value={faq.id} className='border-none shadow-md mb-3 rounded-sm py-2.5 px-7'>
                    <AccordionTrigger className='text-primary text-lg font-lato'>{faq.question}</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p className="text-md md:text-[1rem]">
                      {faq.answer}
                    </p>
                  
                    </AccordionContent>
            </AccordionItem>
                </div>
            ))
        }   
    </Accordion>
    </div>
  )
}

export default FrequentlyAskedQuestions