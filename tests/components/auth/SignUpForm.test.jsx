import React from "react";
import {render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import redLady from '@/images/redLady.png';
import { reasons } from "@/static/data";
import userEvent from "@testing-library/user-event";


vi.mock('../../../src/store/useAuthService',()=>({
    useAuthService:vi.fn()
}))


import { useAuthService } from "@/store/useAuthService";
import { MemoryRouter } from "react-router-dom";
import SignUpForm from "@/components/auth/SignUpForm";


describe('SignUpForm',()=>{
    
    const mockSignUp = vi.fn()
    const userDetails = {
        email:'a@gmail.com',password:'pass123',phone:'07040834109',check:true,country:'Nigeria',
        code:'0000',BusinessName:'Styleit africa',file:'picture',gender:'male'
    }
    beforeEach(()=>{
    
        vi.clearAllMocks();

        useAuthService.mockImplementation(()=>({
            isSignUpForm:true,
        }))
        render(
            <MemoryRouter>
            <SignUpForm onSubmit={mockSignUp(userDetails)}
             header="Ready to find your next client ? let's go"
             reasons={reasons.clientLogin} image={redLady}/>
        </MemoryRouter>
            )
    })
        it('should display the login page and submit the user credentials',async()=>{
            expect(screen.getAllByRole('heading',{name:/create an account/i})[0]).toBeInTheDocument();
            const email = screen.getByPlaceholderText(/Enter email/i)
            const password = screen.getByPlaceholderText(/Enter password/i)
            const confirmPassword = screen.getByPlaceholderText(/confirm password/i)
            const BusinessName = screen.getByPlaceholderText(/Business name/i)
            const phone = screen.getByPlaceholderText(/Active phone number/i)
            const code = screen.getByPlaceholderText(/Enter referral code/i)
            const file = screen.getByTestId(/file input/i)
            const country = screen.getByTestId(/country/i)
            const male = screen.getAllByRole('radio',{name:/Male/i})[0]
            const female = screen.getAllByRole('radio',{name:/Female/i})[0]
            const check = screen.getByRole('checkbox')
            const button = screen.getByRole('button',{name:/Sign Up/i});
            const user = userEvent.setup()

            const picture = new File(['uthman'],'pic.png',{type:'image/png'})
            await user.type(email,'a@gmail.com')
            await user.type(password,'pass123')
            await user.type(confirmPassword,'pass123')
            await user.type(BusinessName,'Styleit africa')
            await user.type(phone,'07040834109')
            await user.type(code,'0000')
            await user.type(country,'Nigeria')
            await user.upload(file,picture)
            await user.click(check)
            expect(check).toBeChecked()
            await user.click(male)
            expect(male).toBeChecked()
            expect(female).not.toBeChecked()
            
            await user.click(button);

            expect(mockSignUp).toHaveBeenCalledWith(userDetails)

        })
  
})