import BookingCard from "@/components/dashboard/bookings/BookingCard";
import { appointments } from "@/static/data";
import { getAllByRole, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";

describe('BookingCard',()=>{
    it('should render accept and decline buttons when page is not history', () => {
        render(<BookingCard appointment={appointments} page='bookings'/>)
        const acceptButton = screen.getByRole('button',{name:'accept'})
        const  declineButton = screen.getByRole('button',{name:'decline'})
        expect(acceptButton).toBeInTheDocument()
        expect(acceptButton).toHaveTextContent(/accept/i)
        expect(declineButton).toBeInTheDocument()
        expect(declineButton).toHaveTextContent(/decline/i)
    })
    it('should not render accept and decline buttons when page is history', () => {
        render(<BookingCard appointment={appointments} page='history'/>)
        const acceptButton = screen.queryByRole('button',{name:'accept'})
        const  declineButton = screen.queryByRole('button',{name:'decline'})
        expect(acceptButton).not.toBeInTheDocument()
        expect(declineButton).not.toBeInTheDocument()
    })
})