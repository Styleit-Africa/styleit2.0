import React from "react";
import {render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PostCard from "@/components/global/post/PostCard";
import userEvent from "@testing-library/user-event";

const component = (post,value)=><PostCard post={post} follow={value}/>

describe('PostCard',()=>{
    const post =   {
        id:1,
        userId:2,
        description:"i started my journey of stylist in the year 2005 with just a come and hair divider. I was managing at my friend's shop at a very extreme com..",
        comments:[
            {
                userId:3,
                name:'kolade',
                description:"incredible jouney!... i'm so glad you made it",
                replies:[
                    {
                        userId:2,
                        name:'kolade',
                        description:"incredible jouney!... i'm so glad you made it",
                    }
                ]
            },
            {
                userId:4,
                name:'james',
                description:"Wow...that's a rough starting point,glad you made it",
                replies:[
                    {
                        userId:2,
                        name:'kolade',
                        description:"incredible jouney!... i'm so glad you made it",
                    }
                ]
            },
        ]
    }
    it('should render follow button  when  the follow prop is true', () => {
        render(component(post,true))
       const button = screen.getByRole('button',{name:/Follow/i})
       expect(button).toHaveTextContent(/Follow/i)
    })
    it('should not render follow button  when  the follow prop is false', () => {
        render(component(post,false))
       const button = screen.queryByRole('button',{name:/Follow/i})
       expect(button).not.toBeInTheDocument();
    })
    it('should not render comments  when isCommmentopened state in the PostCard is false ', () => {
        render(component(post,false))
       const commentContainer = screen.queryByTestId('comment-container') 
       expect(commentContainer).not.toBeInTheDocument()
    })
    it('should render comments  when isCommmentopened state in the PostCard is true ', async() => {
        render(component(post,false))
       const toggleButton = screen.getByTestId('toggle-comment-button') 
       const user = userEvent.setup();
       await user.click(toggleButton)
       const commentContainer = screen.getByTestId('comment-container')
       expect(commentContainer).toBeInTheDocument();
    })
    it('should display the buttons at the top right when the icon at the top right is clicked ', async() => {
        render(component(post,false))
       const optionsIcon = screen.getByTestId('options-icon') 
       const user = userEvent.setup();
       await user.click(optionsIcon)
       const options = screen.getByTestId('options')
       expect(options).toBeInTheDocument();


    })
    
})