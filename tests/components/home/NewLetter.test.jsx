import React from "react";
import {render, screen } from "@testing-library/react";
import {describe, expect, it, vi } from "vitest";

import userEvent from "@testing-library/user-event";

import NewLetter from "@/components/home/NewLetter";

describe('NewLetter',()=>{

    it('should submit newletter data',async()=>{
        const mockSubcribe = vi.fn();
        render(
            <NewLetter onSubmit={mockSubcribe({
                email:'a@gmail.com',name:'latyus'
            })}/>
            )
            const email = screen.getByPlaceholderText(/email/i)
            const name = screen.getByPlaceholderText(/Full name/i)
            const button = screen.getByRole('button',{name:/Subscribe/i});
            const user = userEvent.setup()

            await user.type(email,'a@gmail.com')
            await user.type(name,'latyus')
            await user.click(button);

            expect(mockSubcribe).toHaveBeenCalledWith({
                email:'a@gmail.com',name:'latyus'
            })
        })
  
})