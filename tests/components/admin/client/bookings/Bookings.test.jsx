import React from 'react'
import { render,screen } from '@testing-library/react'
import {beforeEach, describe,expect,it, vi} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { format } from 'date-fns'
import CreatorSubscriptions from '@/components/admin/creator/subscription/CreatorSubscriptions'
import { bookings } from '@/static/adminData'
import Bookings from '@/components/admin/client/bookings/Bookings'
import { changeDateFormat } from '@/lib/utils'

vi.mock('../../../../../store/useCreator',()=>({
  useCreatorStore:vi.fn()
}))

describe('Bookings',()=>{
    
    it('should render list of bookings',async()=>{
        
        render(<MemoryRouter>  
            <Bookings />
               </MemoryRouter> 
        )
        const bookingIds = [];
        changeDateFormat(bookings,'bookings').forEach(async(booking)=>{
            bookingIds.push(booking.id)
            const name = screen.getByTestId(`name-${booking.id}`)
           expect(name).toHaveTextContent(booking.name.trim())
           const collectionDate = screen.getByTestId(`collectionDate-${booking.id}`)
           expect(collectionDate).toHaveTextContent(booking.collectionDate)
           const bookingDate = screen.getByTestId(`bookingDate-${booking.id}`)
           expect(bookingDate).toHaveTextContent(booking.bookingDate)
           const status = screen.getByTestId(`status-${booking.id}`)
           expect(status).toHaveTextContent(booking.status)

        //    check for other colums
         const actionButton = screen.getByTestId(`actionButton-${booking.id}`)
         const user = userEvent.setup();
         await user.click(actionButton);
          if( bookingIds.includes(booking.id)){
              const receiver = screen.getByTestId(`receiver-${booking.id}`)
              expect(receiver).toHaveTextContent(bookingIds.receiver)
                const collectionTime = screen.getByTestId(`collectionTime-${booking.id}`)
                expect(collectionTime).toHaveTextContent(collectionTime)
                const bookingTime = screen.getByTestId(`bookingTime-${booking.id}`)
                expect(bookingTime).toHaveTextContent(bookingTime)
          }else{
                const receiver = screen.queryByTestId(`receiver-${booking.id}`)
                expect(receiver).not.toBeInTheDocument()
                const collectionTime = screen.queryByTestId(`collectionTime-${booking.id}`)
                expect(collectionTime).not.toBeInTheDocument()
                const bookingTime = screen.queryByTestId(`bookingTime-${booking.id}`)
                expect(bookingTime).not.toBeInTheDocument()

          }

    })
     
    })
})
        