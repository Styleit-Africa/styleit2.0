import React from 'react'
import { render,screen } from '@testing-library/react'
import { describe,expect,it, vi} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { complaints } from '@/static/adminData'
import Complainants from '@/components/admin/client/complaint/Complainants'


describe('Complainants',()=>{
    
    it('should render list of complainants',async()=>{
        
        render(<MemoryRouter>  
            <Complainants />
               </MemoryRouter> 
        )
        complaints.forEach(async(complaint)=>{
           const name = screen.getByTestId(`name-${complaint.id}`)
           expect(name).toHaveTextContent(complaint.name.trim())
           const messages = screen.getAllByTestId(`message-${complaint.id}`)
           messages.forEach((message,index)=>{
             expect(message).toHaveTextContent(complaint.message.substring(0,30).trim())
           })
           const periods = screen.getAllByTestId(`time-${complaint.id}`)
           periods.forEach((time,index)=>{
            //  expect(time).toHaveTextContent(time.trim())
             expect(time).toHaveTextContent(/3hrs ago/i)
           })
         
    })
     
    })
})
        