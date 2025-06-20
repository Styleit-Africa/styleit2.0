import React from 'react'
import { render,screen } from '@testing-library/react'
import { describe,expect,it, vi} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { months } from '@/static/adminData'
import LastSeen from '@/components/admin/shared/LastSeen'


describe('LastSeen',()=>{
    it('should render last seen',async()=>{
        const lastSeen = new Date()
        render(<MemoryRouter>  
            <LastSeen lastSeen={lastSeen}/>
               </MemoryRouter> 
        )
        
        const hour = lastSeen.getHours()
        const minute = lastSeen.getMinutes()
        const year = lastSeen.getFullYear()
        const day = lastSeen.getDay()
        const month = months[lastSeen.getMonth()]
        const last_seen = screen.getByTestId('last_seen')
        expect(last_seen).toHaveTextContent(new RegExp(`${hour}`,'i'))
        expect(last_seen).toHaveTextContent(new RegExp(`${year}`,'i'))
        expect(last_seen).toHaveTextContent(new RegExp(`${month}`,'i'))
        expect(last_seen).toHaveTextContent(new RegExp(`${day}`,'i'))
        expect(last_seen).toHaveTextContent(new RegExp(`${minute}`,'i'))



    })
})
        