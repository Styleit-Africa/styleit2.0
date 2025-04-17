import React from "react";
import {render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import BookAppointment from "@/components/dashboard/client/appointments/BookAppointment";


describe('BookAppointment',()=>{
    const mockBookAppointment = vi.fn()
    const appointmentData = {
        fullName:'latyus',collectionTime:'05:50',bookingTime:'02:30',
        bookingDate:'april 23,2025',collectionDate:'april 27,2025'
    }
    render(<BookAppointment onSubmit={mockBookAppointment(appointmentData)}/>)
    it('it should display booking appointment form and submit its data',async()=>{
        const fullName = screen.getByTestId('fullName');
        const collectionTime = screen.getByTestId('collectionTime');
        const bookingTime = screen.getByTestId('bookingTime');
        const bookingDate = screen.getByTestId('bookingDate');
        const collectionDate = screen.getByTestId('collectionDate');
        const button = screen.getByTestId('appointmentBtn');

        const user = userEvent.setup();
        await user.type(fullName,appointmentData.fullName)
        await user.type(collectionTime,appointmentData.collectionTime)
        await user.type(bookingTime,appointmentData.bookingTime)
        await user.type(bookingDate,appointmentData.bookingDate)
        await user.type(collectionDate,appointmentData.collectionDate)

        await user.click(button)
        expect(mockBookAppointment).toHaveBeenCalledWith(appointmentData)


    })
})