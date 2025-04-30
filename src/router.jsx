import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
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
import EditProfilePage from "./pages/creator/EditProfilePage";
import ClientLayout from "./layouts/ClientLayout";
import AppointmentDetails from "./pages/client/AppointmentDetails";
import LikedPosts from "./pages/client/LikedPosts";
import Settings from "./pages/client/Settings";
import Reports from "./pages/client/Reports";
import BookAppointmentPage from "./pages/client/BookAppointmentPage";
import ClientPayment from "./pages/client/ClientPayment";
import TaskPaymentPage from "./pages/client/TaskPaymentPage";
import AdminLayout from "./layouts/AdminLayout";
import DashboardPage from "./pages/admin/DashboardPage";
import AdminCreatorLayout from "./layouts/AdminCreatorLayout";
import AdminCreatorsPage from "./pages/admin/creator/AdminCreatorsPage";
import AdminCreatorProfilePage from "./pages/admin/creator/AdminCreatorProfilePage";
import CreatorSubscriptionPage from "./pages/admin/creator/CreatorSubscriptionPage";
import SingleCreatorSubscriptions from "./components/admin/creator/subscription/SingleCreatorSubscriptions";
import CreatorPayments from "./components/admin/creator/payment/CreatorPayments";
import SingleCreatorPayments from "./components/admin/creator/payment/SingleCreatorPayments";

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
            <Route path='profile/edit' element={<EditProfilePage/>} />
            <Route path='bookings' element={<BookingPage/>} />
            <Route path='posts' element={<PostPage/>} />
            <Route path='history' element={<History/>} />
            <Route path='subscriptions' element={<Subscriptions/>} />
            <Route path='subscriptions/:id' element={<ShowSubscription/>} />
            <Route path='subscriptions/:id/proceed' element={<ProceedSubscription/>} />
          </Route>
          <Route path='/client' element={<ClientLayout/>}>
            <Route path='profile' element={<ProfilePage/>} />
            <Route path='profile/edit' element={<EditProfilePage/>} />
            <Route path='likedPosts' element={<LikedPosts/>} />
            <Route path='appointmentDetails' element={<AppointmentDetails/>} />
            <Route path='settings' element={<Settings/>} />
            <Route path='reportIssues' element={<Reports/>} />
            <Route path='bookAppointment' element={<BookAppointmentPage/>} />
            <Route path='payment' element={<ClientPayment/>} />
            <Route path='taskPayment' element={<TaskPaymentPage/>} />
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='dashboard' element={<DashboardPage/>} />
            <Route path='creators' element={<AdminCreatorLayout/>} >
                <Route index element={<AdminCreatorsPage/>}/>
                <Route path="subscriptions" element={<CreatorSubscriptionPage/>}/>
                <Route path="subscriptions/:id" element={<SingleCreatorSubscriptions/>}/>
                <Route path=":id/profile" element={<AdminCreatorProfilePage/>}/>
                <Route path="payments" element={<CreatorPayments/>}/>
                <Route path="payments/:id" element={<SingleCreatorPayments/>}/>
            </Route>
          </Route>
      </Route>
    )
)

export default router 