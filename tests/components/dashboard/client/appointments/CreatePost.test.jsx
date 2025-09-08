import React from "react";
import {render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import CreatePost from "@/components/global/post/CreatePost";
import userEvent from "@testing-library/user-event";


describe('CreatePost',()=>{
    const mockPost = vi.fn()
    const postData = {description:'coding sucks!',file:'pic.png'}
    render(<CreatePost onSubmit={mockPost(postData)}/>)
    it('it should display create post page and submit its data',async()=>{
        const description = screen.getByPlaceholderText(/Create a post/i);
        const file = screen.getByTestId('upload');
        const button = screen.getByRole('button',{name:/post/i})

        const user = userEvent.setup();
        await user.type(description,'coding sucks!')
        await user.type(file,'coding sucks!')
        const picture = new File(['styleit'],'pic.png',{type:'image/png'})
        await user.upload(file,picture);

        await user.click(button)
        expect(mockPost).toHaveBeenCalledWith(postData)


    })
})