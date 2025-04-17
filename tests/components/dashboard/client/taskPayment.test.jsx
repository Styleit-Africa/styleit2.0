import React from "react";
import {render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import TaskPayment from "@/components/dashboard/client/TaskPayment";


describe('TaskPayment',()=>{
    const mockTaskPayment = vi.fn()
    const paymentData = {fullName:'latyus',amount:'3000',businessName:'A&T',vat:'56',total:'6788'}
    render(<TaskPayment onSubmit={mockTaskPayment(paymentData)}/>)
    it('it should display task payment form and submit its data',async()=>{
        const fullName = screen.getByTestId('fullName');
        const amount = screen.getByTestId('amount');
        const businessName = screen.getByTestId('businessName');
        const vat = screen.getByTestId('vat');
        const total = screen.getByTestId('total');
        const button = screen.getByTestId('paymentBtn');

        const user = userEvent.setup();
        await user.type(fullName,paymentData.fullName)
        await user.type(amount,paymentData.amount)
        await user.type(businessName,paymentData.businessName)
        await user.type(vat,paymentData.vat)
        await user.type(total,paymentData.total)

        await user.click(button)
        expect(mockTaskPayment).toHaveBeenCalledWith(paymentData)


    })
})