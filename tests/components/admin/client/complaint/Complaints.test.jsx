import React from 'react'
import { render,screen } from '@testing-library/react'
import { describe,expect,it, vi} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { complaints } from '@/static/adminData'
import Complaints from '@/components/admin/client/complaint/Complaints'


describe('Complaints',()=>{
    
    it('should render list of complaints',async()=>{
        
        render(<MemoryRouter>  
            <Complaints currentMessages={complaints[0]} />
               </MemoryRouter> 
        )
        complaints[0].replies.forEach((reply)=>{
           const replyName = screen.getByTestId(`replyName-${reply.id}`)
           expect(replyName).toHaveTextContent(reply.name.trim())
           const replyMessage = screen.getByTestId(`replyMessage-${reply.id}`)
        //    expect(replyMessage).toHaveTextContent(reply.message.trim())
           const replyTime = screen.getByTestId(`replyTime-${reply.id}`)
           expect(replyTime).toHaveTextContent(/3:15am/i)
          //  expect(replyTime).toHaveTextContent(reply.time)
    })
     
    })
})
        