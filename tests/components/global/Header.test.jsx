import React from "react";
import {render, screen } from "@testing-library/react";
import {describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Header from "@/components/global/Header";
import { MemoryRouter } from "react-router-dom";


describe('Header',()=>{
    const mockSidebar = vi.fn()
    render(
        <MemoryRouter>
            <Header onOpen={mockSidebar()}/>
        </MemoryRouter>
    )
    it('it should display and hide the sidebar on each click sidebar',async()=>{
        const sidebarButton = screen.getByTestId('sidebar-button');
        const user = userEvent.setup();
        await user.click(sidebarButton)
        expect(mockSidebar).toHaveBeenCalled()
    })
})