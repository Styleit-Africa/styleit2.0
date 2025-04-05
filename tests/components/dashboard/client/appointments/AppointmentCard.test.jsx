import React from 'react'
import { render,screen } from '@testing-library/react'
import {describe,expect,it} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import AppointmentCard from '@/components/dashboard/client/appointments/AppointmentCard'

const appointment = {
    id:11,
    receiver:'ariky stitches',
    name:'Yunus Abdullateef',
    bookingDate:'2025-03-31',
    bookingTime:'18:26',
    collectionDate:'2025-11-15',
    collectionTime:'14:32',
    status:'pending',
    reason:'Hi, i am sorry i have a tight schedule this month.Kindly book ahead in the coming month if not urgent.I will be available'
}

const component = (appointment)=> <MemoryRouter><AppointmentCard appointment={appointment}/></MemoryRouter>


describe('AppoointmentCard',()=>{
    
    it('should render apppointment card without accepted component and payment completed message when status is pending',()=>{
        const pendingAppointment = {...appointment,status:'pending'}
        render(component(pendingAppointment))
        const elements = [
            screen.getByRole('booking-card'),
            screen.getByRole('appointment-card'),
            screen.getByRole('appointment-message'),
        ]

        elements.forEach(element=>{
            expect(element).toBeInTheDocument()
        })
    
    })
    it('should render apppointment card with accepted component when status is accepted',()=>{
        const acceptedAppointment = {...appointment,status:'accepted'}
        render(component(acceptedAppointment))
        const elements = [
            screen.getByRole('booking-card'),
            screen.getByRole('appointment-card'),
            screen.getByRole('appointment-message'),
            screen.getByRole('accepted')
        ]
        elements.forEach(element=>{
            expect(element).toBeInTheDocument()
        })
        expect(screen.getByRole('negotiate')).toHaveTextContent(/kindly make payment below/i)
        expect(screen.getByRole('status')).toHaveTextContent(/to makeup decisions/i)
        expect(screen.queryByRole('completed')).not.toBeInTheDocument()
    
    })
    it('should render apppointment card without accepted component when status is declined',()=>{
        const declinedAppointment = {...appointment,status:'declined'}
        render(component(declinedAppointment))
        const elements = [
            screen.getByRole('booking-card'),
            screen.getByRole('appointment-card'),
            screen.getByRole('appointment-message'),
            screen.getByRole('reason')
        ]
        elements.forEach(element=>{
            expect(element).toBeInTheDocument()
        })

        expect(elements[elements.length-1]).toHaveTextContent(/book appointment/i)
    
    })
    it('should render apppointment card with payment completed when status is paid',()=>{
       const paidAppointment = {...appointment,status:'paid'}
        render(component(paidAppointment))
        const elements = [
            screen.getByRole('booking-card'),
            screen.getByRole('appointment-card'),
            screen.getByRole('appointment-message'),
            screen.getByRole('completed')
        ]
        elements.forEach(element=>{
            expect(element).toBeInTheDocument()
        })
        expect(screen.getByRole('status')).toHaveTextContent(/completed/i)
        expect(screen.getByRole('completed')).toHaveTextContent(/payment completed/i)
    
    })
})