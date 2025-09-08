import React from 'react'
import { render,screen, within } from '@testing-library/react'
import {beforeEach, describe,expect,it, vi} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import CreatorPayments from '@/components/admin/creator/payment/CreatorPayments'
import {useCreatorStore } from '@/store/useCreator'
import userEvent from '@testing-library/user-event'
import { format } from 'date-fns'
import { changeDateFormat } from '@/lib/utils'


vi.mock('../../../../../store/useCreator',()=>({
  useCreatorStore:vi.fn()
}))

describe('CreatorPayments',()=>{
    
    const payments = [

        {
            id:1,
            name:'uthman fatai',
            date:'2025-05-01',
            email:'sulaiman@gmail.com ',
            ref:'12646456289',
            amount:1000,
            status:'pending',
            lastPayments:[
                            {
                    id:1,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12246456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                },
                {
                    id:2,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'123446456289',
                    amount:1000,
                    status:'successful',
                    to:'2025-08-01',
                },
                {
                    id:3,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                }
            ]
        },
        {
            id:2,
            name:'abdullahi fatai',
            date:'2025-03-01',
            email:'sulaiman@gmail.com ',
            ref:'12546456289',
            amount:1000,
            status:'declined',
            to:'2025-08-01',
            lastPayments:[
                            {
                    id:1,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                },
                {
                    id:2,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'successful',
                    to:'2025-08-01',
                },
                {
                    id:3,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                }
            ]
        },
        {
            id:3,
            name:'Faruq Sulaiman',
            date:'2025-05-01',
            email:'sulaiman@gmail.com ',
            ref:'12846456289',
            amount:1000,
            status:'successful',
            to:'2025-08-01',
            lastPayments:[
                            {
                    id:1,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                },
                {
                    id:2,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'successful',
                    to:'2025-08-01',
                },
                {
                    id:3,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                }
            ]
        },
        {
            id:4,
            name:'salam Yusuf',
            date:'2025-03-01',
            email:'sulaiman@gmail.com ',
            ref:'12746456289',
            amount:1000,
            status:'successful',
            to:'2026-08-01',
            lastPayments:[
                            {
                    id:1,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                },
                {
                    id:2,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'successful',
                    to:'2025-08-01',
                },
                {
                    id:3,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                }
            ]
        },
        {
            id:5,
            name:'fatai Yusrat ',
            date:'2025-05-01',
            email:'sulaiman@gmail.com ',
            ref:'12846456289',
            amount:1000,
            status:'pending',
            to:'2025-08-01',
            lastPayments:[
                            {
                    id:1,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                },
                {
                    id:2,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'successful',
                    to:'2025-08-01',
                },
                {
                    id:3,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                }
            ]
        },
        {
            id:6,
            name:'Adeleke Muminat',
            date:'2025-05-01',
            email:'sulaiman@gmail.com ',
            ref:'12346456289',
            amount:1000,
            status:'successful',
            to:'2027-08-01',
            lastPayments:[
                            {
                    id:1,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                },
                {
                    id:2,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'successful',
                    to:'2025-08-01',
                },
                {
                    id:3,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                }
            ]
        },
        {
            id:7,
            name:'uthman fatai',
            date:'2025-02-01',
            email:'sulaiman@gmail.com ',
            ref:'12346456289',
            amount:1000,
            status:'successful',
            to:'2025-08-01',
            lastPayments:[
                            {
                    id:1,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                },
                {
                    id:2,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'successful',
                    to:'2025-08-01',
                },
                {
                    id:3,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                }
            ]
        },
        {
            id:8,
            name:'uthman fatai',
            date:'2025-05-01',
            email:'sulaiman@gmail.com ',
            ref:'12346456289',
            amount:1000,
            status:'successful',
            to:'2025-08-01',
            lastPayments:[
                            {
                    id:1,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                },
                {
                    id:2,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'successful',
                    to:'2025-08-01',
                },
                {
                    id:3,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                }
            ]
        },
        {
            id:9,
            name:'uthman fatai',
            date:'2025-05-01',
            email:'sulaiman@gmail.com ',
            ref:'12346456289',
            amount:1000,
            status:'pending',
            to:'2025-08-01',
            lastPayments:[
                            {
                    id:1,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                },
                {
                    id:2,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'successful',
                    to:'2025-08-01',
                },
                {
                    id:3,
                    name:'fatai Yusrat ',
                    date:'2025-05-01',
                    email:'sulaiman@gmail.com ',
                    ref:'12346456289',
                    amount:1000,
                    status:'declined',
                    to:'2025-08-01',
                }
            ]
        }
    ]
    

    beforeEach(()=>{
        vi.clearAllMocks()
        useCreatorStore.setState({
            creatorPayments:changeDateFormat(payments,'payments'),
     })
    })
    it('should render list of creator payments',async()=>{
        
        render(<MemoryRouter>  
            <CreatorPayments />
               </MemoryRouter> 
        )

        const paymentIds = [];
        payments.forEach(async(payment)=>{
            paymentIds.push(payment.id)
           const title = screen.getByTestId(`name-${payment.id}`)
           expect(title).toHaveTextContent(payment.name.trim())
           const date = screen.getByTestId(`date-${payment.id}`)
           expect(date).toHaveTextContent(format(new Date(payment.date),'MMMM do, yyyy'))
           const amount = screen.getByTestId(`amount-${payment.id}`)
           expect(amount).toHaveTextContent(payment.amount)
           const ref = screen.getByTestId(`ref-${payment.id}`)
           expect(ref).toHaveTextContent(payment.ref)
           const status = screen.getByTestId(`status-${payment.id}`)
           expect(status).toHaveTextContent(payment.status)
           const actionButton = screen.getByTestId(`actionButton-${payment.id}`)
           const user = userEvent.setup();
            await user.click(actionButton);
            if(paymentIds.includes(payment.id)){
                expect(screen.getByTestId(`last-payments-${payment.id}`)).toBeInTheDocument()
            }else{
                expect(screen.queryByTestId(`last-payments-${payment.id}`)).not.toBeInTheDocument()
            }
           
    })
     
    })
})
        