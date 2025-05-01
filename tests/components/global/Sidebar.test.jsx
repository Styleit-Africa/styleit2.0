import React from "react";
import {render, screen } from "@testing-library/react";
import {beforeEach, describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import Header from "@/components/global/Header";
import { MemoryRouter } from "react-router-dom";
import { useGlobalStore } from "@/store/global/useGlobal";

describe('Header',()=>{

    beforeEach(()=>{
        useGlobalStore.setState({isSidebarOpened:false})
    })
    render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
    )
    it('it should display and hide the sidebar on each click sidebar',async()=>{
        const sidebarButton = screen.getByTestId('sidebar-button');
        const user = userEvent.setup();
        // open sidebar
        await user.click(sidebarButton)
        expect(useGlobalStore.getState().isSidebarOpened).toBe(true)
        // close sidebar
        await user.click(sidebarButton)
        expect(useGlobalStore.getState().isSidebarOpened).toBe(false)
    })
})