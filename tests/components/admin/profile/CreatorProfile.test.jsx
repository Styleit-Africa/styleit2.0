import React from "react";
import {render, screen } from "@testing-library/react";
import {beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import EditProfileForm from "@/components/global/EditProfileForm";
import profileImage from '@/images/icon_n1.png'
import CreatorProfile from "@/components/admin/creator/profile/CreatorProfile";
import { useForm } from "react-hook-form";

vi.mock('react-hook-form',async()=>{
    const actual = await vi.importActual('react-hook-form');
    return {
        ...actual,
        useForm:()=>({
            register:vi.fn(),
            handleSubmit:vi.fn(),
            setValue:vi.fn(),
            control:{},
            formState:{errors:{}}
        })
    }
})
const mockCreators = [
    {
        id:1,
        name:'uthman fatai',
        email:'u@gmail.com',
        status:'suspended',
        gender:'male',
        phoneNumber:'07040834109',
        businessName:'Noble stiches',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    },
    {
        id:2,
        name:'abdullahi fatai',
        email:'u@gmail.com',
        status:'banned',
        gender:'male',
        phoneNumber:'07040834109',
        businessName:'The neatly done',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    },
    {
        id:3,
        name:'Faruq Sulaiman',
        email:'u@gmail.com',
        status:'approved',
        gender:'male',
        phoneNumber:'07040834109',
        businessName:'stitching lord',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    }
]

vi.mock('../../../../static/adminData',()=>({
    creators:mockCreators
}))


describe('CreatorProfile',()=>{
    const inputData = [
        'uthman','fatai','u@gmail.com','181,Fola Azeez Cresent,Akulo',
        'Guarantee trust Bank','00192207800','09066778876','Ifako-ijaye'
    ]
    const mockSubmit = vi.fn()
    beforeEach(()=>{
        vi.clearAllMocks();
        render(
            <MemoryRouter>
                <CreatorProfile onSubmit={mockSubmit(inputData)} />
            </MemoryRouter>
        )
    })
    it('should render creator edit profile form with initial values,update button and submit the data with the new values ',async()=>{
        const formInputs = [
            screen.getAllByTestId('firstName'),
            screen.getAllByTestId('lastName'),
            screen.getByTestId('email'),
            screen.getByTestId('gender'),
            screen.getByTestId('street'),
            screen.getByTestId('businessName'),
            screen.getByTestId('phoneNumber'),
            screen.getByTestId('lga'),
            screen.getByTestId('country')
        ]
        formInputs.forEach((input,index)=>{
            expect(input).toHaveValue(inputData[index])
        })
        // expect(screen.getByTestId('image')).toHaveAttribute('src',profileImage)
        // expect(screen.getByTestId('update-btn')).toHaveTextContent(/update/i)
        // expect(screen.queryByTestId('edit-btn')).not.toBeInTheDocument()

        
        // should call onSubmit with the updated data
        const user = userEvent.setup()
        formInputs.forEach(async(input,index)=>{
            await user.clear(input)
            await user.type(inputData[index])
        })
        expect(mockSubmit).toHaveBeenCalledWith(inputData)
    })
    // it('should render edit profile form with initial values ',async()=>{
    //     <EditProfileForm onSubmit={mockSubmit(inputData)} isEditable={false} title="Profile"/>

    //     const formInputs = [
    //         screen.getAllByTestId('firstName')[0],
    //         screen.getAllByTestId('lastName')[0],
    //         screen.getByTestId('email'),
    //         screen.getByTestId('address'),
    //         screen.getByTestId('bank'),
    //         screen.getByTestId('bank_acc'),
    //         screen.getByTestId('mobile'),
    //         screen.getByTestId('lga')
    //     ]
    //     formInputs.forEach((input,index)=>{
    //         expect(input).toHaveValue(inputData[index])
    //     })



    // })
})