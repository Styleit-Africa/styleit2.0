import React from 'react'
import { render,screen } from '@testing-library/react'
import {beforeEach, describe,expect,it, vi} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { format } from 'date-fns'
import CreatorSubscriptions from '@/components/admin/creator/subscription/CreatorSubscriptions'


vi.mock('../../../../../store/useCreator',()=>({
  useCreatorStore:vi.fn()
}))

describe('SingleCreatorSubscriptions',()=>{
    
  
  const creatorSubscriptions = [
  
      {
          id:1,
          name:'uthman fatai',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
          lastSubscriptions:[
                  {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      }
          ]
      },
      {
          id:2,
          name:'abdullahi fatai',
          plan:'4 months ',
          status:'expired',
          from:'2025-03-01',
          to:'2025-08-01',
          lastSubscriptions:[
                  {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      }
          ]
      },
      {
          id:3,
          name:'Faruq Sulaiman',
          plan:'4 months ',
          status:'active',
          from:'2025-05-01',
          to:'2025-08-01',
          lastSubscriptions:[
                  {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      }
          ]
      },
      {
          id:4,
          name:'salam Yusuf',
          plan:'4 months ',
          status:'active',
          from:'2025-03-01',
          to:'2026-08-01',
          lastSubscriptions:[
                  {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      }
          ]
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
          lastSubscriptions:[
                  {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      }
          ]
      },
      {
          id:6,
          name:'Adeleke Muminat',
          plan:'4 months ',
          status:'active',
          from:'2025-05-01',
          to:'2027-08-01',
          lastSubscriptions:[
                  {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      }
          ]
      },
      {
          id:7,
          name:'uthman fatai',
          plan:'4 months ',
          status:'active',
          from:'2025-02-01',
          to:'2025-08-01',
          lastSubscriptions:[
                  {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      }
          ]
      },
      {
          id:8,
          name:'uthman fatai',
          plan:'4 months ',
          status:'active',
          from:'2025-05-01',
          to:'2025-08-01',
          lastSubscriptions:[
                  {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      }
          ]
      },
      {
          id:9,
          name:'uthman fatai',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
          lastSubscriptions:[
                  {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      },
      {
          id:5,
          name:'fatai Yusrat ',
          plan:'4 months ',
          status:'expired',
          from:'2025-05-01',
          to:'2025-08-01',
      }
          ]
      }
  ]

    beforeEach(()=>{
        vi.clearAllMocks()
        useCreatorStore.setState({
            creatorSubscriptions:changeDateFormat(creatorSubscriptions,'subscriptions'),
     })
    })
    it('should render list of single creator subscriptions',async()=>{
        
        render(<MemoryRouter>  
            <CreatorSubscriptions />
               </MemoryRouter> 
        )

        creatorSubscriptions.forEach(async(sub)=>{
           const from = screen.getByTestId(`from-${sub.id}`)
           const to = screen.getByTestId(`to-${sub.id}`)
           expect(from).toHaveTextContent(format(new Date(sub.from),'MMMM do, yyyy'))
           expect(to).toHaveTextContent(format(new Date(sub.to),'MMMM do, yyyy'))
           const plan = screen.getByTestId(`plan-${sub.id}`)
           expect(plan).toHaveTextContent(sub.plan)
           const status = screen.getByTestId(`status-${sub.id}`)
           expect(status).toHaveTextContent(sub.status)
          
          
           
    })
     
    })
})
        