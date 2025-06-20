import React from 'react'
import { render,screen } from '@testing-library/react'
import {beforeEach, describe,expect,it, vi} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { creators as clients } from '@/static/adminData'
import { useClientStore } from '@/store/useClient'
import Clients from '@/components/admin/client/Clients'


vi.mock('../../../../../store/useClient',()=>({
  useClientStore:vi.fn()
}))

describe('Clients',()=>{
    
  
  
    beforeEach(()=>{
        vi.clearAllMocks()
        useClientStore.setState({
            clients,
     })
    })
    it('should render list of clients',async()=>{
        
        render(<MemoryRouter>  
            <Clients />
               </MemoryRouter> 
        )
        
        let creatorIds = [];
        clients.forEach(async(client)=>{
           creatorIds.push(client.id)
           const name = screen.getByTestId(`name-${client.id}`)
           expect(name).toHaveTextContent(client.name.trim())
           const email = screen.getByTestId(`email-${client.id}`)
           expect(email).toHaveTextContent(client.email)
           const gender = screen.getByTestId(`gender-${client.id}`)
           expect(gender).toHaveTextContent(client.gender)
           const status = screen.getByTestId(`status-${client.id}`)
           expect(status).toHaveTextContent(client.status)
           const actionButton = screen.getByTestId(`actionButton-${client.id}`)
           const user = userEvent.setup();
            await user.click(actionButton);
            if(creatorIds.includes(bookings.id)){
                expect(screen.getByTestId(`menu-${client.id}`)).toBeInTheDocument()
            }else{
                expect(screen.queryByTestId(`menu-${client.id}`)).not.toBeInTheDocument()
            }
           
    })
     
    })
})
        