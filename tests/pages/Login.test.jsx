// import React from "react";
// import {fireEvent, render, screen, waitFor } from "@testing-library/react";
// import { describe, expect, it, vi } from "vitest";
// import PostCard from "@/components/global/post/PostCard";
// import redLady from '@/images/redLady.png'
// import young from '@/images/young.png'
// import userEvent from "@testing-library/user-event";
// import LoginForm from "@/components/auth/LoginForm";
// import { reasons } from "@/static/data";
// import Join from "@/components/auth/Join";
// import Login from "@/pages/auth/Login";

// // const component = (post,value)=><PostCard post={post} follow={value}/>

// describe('LoginForm',()=>{
//     let role = 'Fashion'
//     it('should select the role chosen by the user',async()=>{
//         const mockLogin = vi.fn();
//         render(<Login />)

//         // const header = screen.getByRole('header')
//         const fashion = screen.getByRole('radio',{name:/Fashion/i})
//         const client = screen.getByRole('radio',{name:/Client/i})

//         // join component
//         const user = userEvent.setup();
//         await user.click(fashion)
//         expect(fashion).toBeChecked(); 
//         expect(client).not.toBeChecked();

//         const button = screen.getByRole('button');
//         await user.click(button);
//         // // expect(mockLogin).toHaveBeenCalledWith('Fashion')
//         // await waitFor(()=>expect(mockLogin).toHaveBeenCalled())

// })
// })