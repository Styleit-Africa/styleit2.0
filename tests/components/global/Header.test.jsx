import React from "react";
import {render, screen } from "@testing-library/react";
import {beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import Header from "@/components/global/Header";
import { MemoryRouter } from "react-router-dom";

// vi.mock('../../../src/store/useGlobal/useGlobalStore',()=>({
//     useGlobalStore:vi.fn()
// }))
import { useGlobalStore } from "@/store/global/useGlobal";

describe('Header',()=>{
    const mockSidebar = vi.fn()

    beforeEach(()=>{
        useGlobalStore.setState({isSidebarOpened:false})
    })
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