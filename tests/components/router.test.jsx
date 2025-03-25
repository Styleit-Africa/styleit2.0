import router from "@/router";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { createMemoryRouter,RouterProvider } from "react-router-dom";
import { describe, expect, it } from "vitest";



const createRouter = (initialEntries = ['/'])=>{
    return createMemoryRouter(router.routes,{
        initialEntries
    })
}

describe('Routing',()=>{
    
    const routeProvider = (route)=>{
        return render(<RouterProvider router={createRouter([route])}/>)
    }
    it('should render home page by default',async()=>{
        routeProvider('/');
        const home = screen.getByTestId('home-page')
        expect(home).toBeInTheDocument()
    })
    it('should render trending page',async()=>{
        routeProvider('/trending');
        const trending = screen.getByTestId('trending-page')
        expect(trending).toBeInTheDocument();
    })
    it('should render blogs page',async()=>{
        routeProvider('/blogs');
        const blog = screen.getByTestId('blog-page')
        expect(blog).toBeInTheDocument();
    })
    it('should render fashion designer page',async()=>{
        routeProvider('/fashionDesigner');
        const fashionDesigner = screen.getByTestId('fashion-page')
        expect(fashionDesigner).toBeInTheDocument();
    })
    it('should render bookings page',async()=>{
        routeProvider('/creator/bookings');
        const bookings = screen.getByTestId('bookings-page')
        expect(bookings).toBeInTheDocument();
    })
    it('should render profile page',async()=>{
        routeProvider('/creator/profile');
        const profile = screen.getByTestId('profile-page')
        expect(profile).toBeInTheDocument();
    })
    it('should render posts page',async()=>{
        routeProvider('/creator/posts');
        const posts = screen.getByTestId('posts-page')
        expect(posts).toBeInTheDocument();
    })
    it('should render history page',async()=>{
        routeProvider('/creator/history');
        const history = screen.getByTestId('history-page')
        expect(history).toBeInTheDocument();
    })
    it('should render subscriptions page',async()=>{
        routeProvider('/creator/subscriptions');
        const subscriptions = screen.getByTestId('subscriptions-page')
        expect(subscriptions).toBeInTheDocument();
    })
    it('should render show subscription page',async()=>{
        routeProvider('/creator/subscriptions/1');
        const subscription = screen.getByTestId('show-subscription')
        expect(subscription).toBeInTheDocument();
    })
    it('should render show subscription page',async()=>{
        routeProvider('/creator/subscriptions/1/proceed');
        const subscription = screen.getByTestId('proceed-subscription')
        expect(subscription).toBeInTheDocument();
    })
    it('should render login page',async()=>{
        routeProvider('/login');
        const login = screen.getByTestId('login-page')
        expect(login).toBeInTheDocument();
    })
    it('should render sign up page',async()=>{
        routeProvider('/signUp');
        const signUp = screen.getByTestId('signUp-page')
        expect(signUp).toBeInTheDocument();
    })
})