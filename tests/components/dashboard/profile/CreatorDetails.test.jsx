import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, it } from "vitest";
import userEvent from "@testing-library/user-event";
import CreatorDetails from "../../../../src/components/dashboard/profile/creator/CreatorDetails";
import { MemoryRouter } from "react-router-dom";

const component = ()=> <MemoryRouter><CreatorDetails/></MemoryRouter>

describe('CreatorDetails',()=>{
   let description = "i'm a fashion designer with 5 years of experience in designing fashionable clothes i'm a fashion designer with 5 years of experience in designing fashionable clothes i'm a fashion designer with 5 years of experience in designing fashionable clothes i'm a fashion designer with 5 years of experience in designing fashionable clothes i'm a fashion designer with 5 years of experience in designing fashionable clothes"

    it('it should display truncated user details',()=>{
        render(component())
        const truncatedText = description.slice(0,350)+'...';
        const heading = screen.getByRole('heading',{name:'profile description'});
        expect(screen.getByText(truncatedText)).toBeInTheDocument()
        expect(heading).toHaveTextContent(/Profile/i);

        const button = screen.getByRole('button');
        expect(button).toHaveTextContent(/more/i)
    })

    it('it should display user details',async()=>{
        render(component())
        const heading = screen.getByRole('heading',{name:'profile description'});
        expect(heading).toHaveTextContent(/Profile/i);
        
        const button = screen.getByRole('button');
        const user = userEvent.setup();
        await user.click(button)
        expect(screen.getByText(description)).toBeInTheDocument()
        expect(button).toHaveTextContent(/less/i)
    })
})