import React from 'react'
import { render,screen } from '@testing-library/react'
import { describe,expect,it, vi} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { loginDetails } from '@/static/adminData'
import LoginDetails from '@/components/admin/shared/LoginDetails'


describe('LoginDetails',()=>{
    it('should render login details',async()=>{
        
        render(<MemoryRouter>  
            <LoginDetails />
               </MemoryRouter> 
        )
        loginDetails.forEach((detail)=>{
            const name = screen.getByTestId(`name-${detail.id}`)
           expect(name).toHaveTextContent(detail.name.trim())
           const value = screen.getByTestId(`value-${detail.id}`)
           expect(value).toHaveTextContent(detail.value)
           const icon = screen.getByTestId(`icon-${detail.id}`)
           expect(icon).toBeInTheDocument();

        })
    })
})
        