import React from "react";
import {render, screen } from "@testing-library/react";
import {beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import EditProfileForm from "@/components/global/EditProfileForm";
import profileImage from '@/images/icon_n1.png'


describe('EditProfileForm',()=>{
    const inputData = [
        'Michael','Moses','michaelmoses@gmail.com','181,Fola Azeez Cresent,Akulo',
        'Guarantee trust Bank','00192207800','09066778876','Ifako-ijaye'
    ]
    const mockSubmit = vi.fn()
    beforeEach(()=>{
        vi.clearAllMocks();
        render(
            <MemoryRouter>
                <EditProfileForm onSubmit={mockSubmit(inputData)} isEditable={true} title="Edit Profile"/>
            </MemoryRouter>
        )
    })
    it('should render edit profile form with initial values,update button and submit the data with the new values ',async()=>{
        const formInputs = [
            screen.getAllByTestId('firstName')[0],
            screen.getAllByTestId('lastName')[0],
            screen.getByTestId('email'),
            screen.getByTestId('address'),
            screen.getByTestId('bank'),
            screen.getByTestId('bank_acc'),
            screen.getByTestId('mobile'),
            screen.getByTestId('lga')
        ]
        formInputs.forEach((input,index)=>{
            expect(input).toHaveValue(inputData[index])
        })
        expect(screen.getByTestId('image')).toHaveAttribute('src',profileImage)
        expect(screen.getByTestId('update-btn')).toHaveTextContent(/update/i)
        expect(screen.queryByTestId('edit-btn')).not.toBeInTheDocument()

        
        // should call onSubmit with the updated data
        const user = userEvent.setup()
        formInputs.forEach(async(input,index)=>{
            await user.clear(input)
            await user.type(inputData[index])
        })
        expect(mockSubmit).toHaveBeenCalledWith(inputData)
    })
    it('should render edit profile form with initial values ',async()=>{
        <EditProfileForm onSubmit={mockSubmit(inputData)} isEditable={false} title="Profile"/>

        const formInputs = [
            screen.getAllByTestId('firstName')[0],
            screen.getAllByTestId('lastName')[0],
            screen.getByTestId('email'),
            screen.getByTestId('address'),
            screen.getByTestId('bank'),
            screen.getByTestId('bank_acc'),
            screen.getByTestId('mobile'),
            screen.getByTestId('lga')
        ]
        formInputs.forEach((input,index)=>{
            expect(input).toHaveValue(inputData[index])
        })



    })
})