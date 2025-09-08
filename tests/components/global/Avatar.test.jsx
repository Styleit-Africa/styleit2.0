import React from "react";
import {render, screen } from "@testing-library/react";
import {beforeEach, describe, expect, it, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import EditProfileForm from "@/components/global/EditProfileForm";
import profileImage from '@/images/icon_n1.png'
import Avatar from "@/components/global/Avatar";
import { Section } from "lucide-react";


describe('Avatar',()=>{
    let complaint = {
            id:1,
            userId:2,
            name:'Uthman Bello',
            image:profileImage,
            message:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
            replies:[
                {
                    id:1,
                    userId:3,
                    name:'Yusuf ibrahim',
                    response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
                },
                {
                    id:2,
                    userId:3,
                    name:'Yusuf ibrahim',
                    response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
                },
                {
                    id:3,
                    userId:3,
                    name:'Yusuf ibrahim',
                    response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
                },
                {
                    id:4,
                    userId:3,
                    name:'Yusuf ibrahim',
                    response:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis cumque, itaque, corporis nam, praesentium iure neque alias dolorum nostrum earum dolor est dignissimos necessitatibus cum. Molestias quaerat ullam repudiandae.',
                },
           ],
        }
    it('it show render image when the image is provided',()=>{
        render(<Avatar data={{complaint,section:1}}/>)
          const image =  screen.getByTestId('image')
          expect(image).toHaveAttribute('src',complaint.image)
          expect(image).toBeInTheDocument();
          const customizedAvatar =  screen.queryByTestId('customizedAvatar');
          expect(customizedAvatar).not.toBeInTheDocument();
    })
    it('it show render customized first letters from their names when the image is not provided',()=>{
       complaint = {...complaint,image:''}
        render(<Avatar data={{complaint,section:1}}/>)
        const name = complaint.name.split(' ').length > 0 ? 
    `${complaint.name.split(' ')[0].slice(0,1)} ${complaint.name.split(' ')[1].slice(0,1)} `: complaint.name.split(' ')[0].slice(0,1).toUpperCase()
          const image =  screen.queryByTestId('image')
          expect(image).not.toBeInTheDocument();
          const customizedAvatar =  screen.getByTestId('customizedAvatar');
          expect(customizedAvatar).toHaveTextContent(/U B/i)
          expect(customizedAvatar).toBeInTheDocument();
    })
})