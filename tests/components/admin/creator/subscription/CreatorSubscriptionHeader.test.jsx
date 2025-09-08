import React from 'react'
import { render,screen, within } from '@testing-library/react'
import {describe,expect,it, vi} from 'vitest'
import CreatorSubscrptionHeader from '@/components/admin/creator/subscription/CreatorSubscrptionHeader'

const component = value => <CreatorSubscrptionHeader full={value}/>
  
describe('CreatorSubscriptionHeader',()=>{
 
       it('shoould render the full header when the full prop is true',()=>{
        render(
            component(true)
        )
           const subscriptionHeader = screen.getByTestId('full-header')
           expect(subscriptionHeader).toBeInTheDocument();
       })
       it('shoould not render the full header when the full prop is false',()=>{
        render(
            component(false)
        )
           const subscriptionHeader = screen.getByTestId('half-header')
           expect(subscriptionHeader).toBeInTheDocument();
       })
     
})
        