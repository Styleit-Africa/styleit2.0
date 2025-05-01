import React from 'react'
import { render,screen } from '@testing-library/react'
import {beforeEach, describe,expect,it, vi} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { format } from 'date-fns'
import { creators } from '@/static/adminData'
import Creators from '@/components/admin/creator/Creators'
import { useCreatorStore } from '@/store/useCreator'


vi.mock('../../../../../store/useCreator',()=>({
  useCreatorStore:vi.fn()
}))

describe('Creator',()=>{
    
  
  
    beforeEach(()=>{
        vi.clearAllMocks()
        useCreatorStore.setState({
            creators,
     })
    })
    it('should render list of creators',async()=>{
        
        render(<MemoryRouter>  
            <Creators />
               </MemoryRouter> 
        )
        
        let id = null;
        creators.forEach(async(creator)=>{
           const name = screen.getByTestId(`name-${creator.id}`)
           expect(name).toHaveTextContent(creator.name.trim())
           const email = screen.getByTestId(`email-${creator.id}`)
           expect(email).toHaveTextContent(creator.email)
           const gender = screen.getByTestId(`gender-${creator.id}`)
           expect(gender).toHaveTextContent(creator.gender)
           const status = screen.getByTestId(`status-${creator.id}`)
           expect(status).toHaveTextContent(creator.status)
           const actionButton = screen.getByTestId(`actionButton-${creator.id}`)
           const user = userEvent.setup();
            await user.click(actionButton);
            if(creator.id === id){
                expect(screen.getByTestId(`menu-${creator.id}`)).toBeInTheDocument()
            }else{
                expect(screen.queryByTestId(`menu-${creator.id}`)).not.toBeInTheDocument()
            }
           
    })
     
    })
})
        