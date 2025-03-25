import React from "react";
const { createBrowserRouter, createRoutesFromElements, Route } = require("react-router-dom");
import Home from './pages/Home';
import Layout from './layouts/Layout';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import Trending from './pages/Trending';
import Subscriptions from './pages/creator/Subscriptions';
import History from './pages/creator/History';
import ShowSubscription from './components/dashboard/creator/ShowSubscription.jsx';
import ProceedSubscription from './components/dashboard/creator/ProceedSubscription';
import CreatorLayout from './layouts/CreatorLayout';
import ProfilePage from './pages/creator/ProfilePage';
import BookingPage from './pages/creator/BookingPage';
import PostPage from './pages/creator/PostPage';
import Blogs from "./pages/Blogs";
import FashionDesigner from "./pages/FashionDesigner";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/trending' element={<Trending/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/fashionDesigner' element={<FashionDesigner/>} />
          <Route path='/creator' element={<CreatorLayout/>}>
            <Route path='profile' element={<ProfilePage/>} />
            <Route path='bookings' element={<BookingPage/>} />
            <Route path='posts' element={<PostPage/>} />
            <Route path='history' element={<History/>} />
            <Route path='subscriptions' element={<Subscriptions/>} />
            <Route path='subscriptions/:id' element={<ShowSubscription/>} />
            <Route path='subscriptions/:id/proceed' element={<ProceedSubscription/>} />
          </Route>
      </Route>
    )
)

export default router 