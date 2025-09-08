import React from 'react'
import Appointments from '@/components/dashboard/client/appointments/Appointments'
import { appointments } from '@/static/data'
import { render,screen } from '@testing-library/react'
import {describe,it} from 'vitest'
import { MemoryRouter } from 'react-router-dom'


describe('Appoointments',()=>{
    
    it('should render list of appointments',()=>{
        render(<MemoryRouter>
            <Appointments />
        </MemoryRouter>)

    const appointmentStatus = screen.getAllByRole('status')
    const elements = screen.getAllByRole('appointment-card')

    appointments.forEach((appointment,index)=>{
        const {status,receiver} = appointment
        expect(elements[index]).toContainElement(appointmentStatus[index])
        expect(appointmentStatus[index]).toHaveTextContent(`Your appointment with ${receiver} ${status==='pending'?'is':'was'} ${status==='paid'?'completed':status}`)
    })
     
    })
})