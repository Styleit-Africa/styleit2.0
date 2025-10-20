import React from "react";
import {createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Home from './pages/Home';
import Layout from './layouts/Layout';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import TrendingPage from './pages/TrendingPage';
import Subscriptions from './pages/creator/Subscriptions';
import History from './pages/creator/History';
import ShowSubscription from './components/dashboard/creator/ShowSubscription.jsx';
import ProceedSubscription from './components/dashboard/creator/ProceedSubscription';
import CreatorLayout from './layouts/CreatorLayout';
import ProfilePage from './pages/creator/ProfilePage';
import BookingPage from './pages/creator/BookingPage';
import PostPage from './pages/creator/PostPage';
import Blogs from "./pages/Blogs";
import FashionDesigner from "./pages/FashionDesigners";
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
import AdminCreatorLayout from "./layouts/AdminCreatorLayout";
import AdminCreatorsPage from "./pages/admin/creator/AdminCreatorsPage";
import AdminCreatorProfilePage from "./pages/admin/creator/AdminCreatorProfilePage";
import CreatorSubscriptionPage from "./pages/admin/creator/CreatorSubscriptionPage";
import CreatorSingleSubscriptionPage from "./pages/admin/creator/CreatorSingleSubscriptionPage";
import CreatorPaymentPage from "./pages/admin/creator/CreatorPaymentsPage";
import CreatorSinglePaymentPage from "./pages/admin/creator/CreatorSinglePaymentsPage";
import AdminClientLayout from "./layouts/AdminClientLayout";
import AdminClientsPage from "./pages/admin/client/AdminClientsPage";
import AdminClientBookingPage from "./pages/admin/client/AdminClientBookingPage";
import AdminSingleClientBookingPage from "./pages/admin/client/AdminSingleClientBookingPage";
import AdminClientComplaints from "./pages/admin/client/AdminClientComplaints";
import AdminSingleClientComplaints from "./pages/admin/client/AdminSingleClientComplaints";
import AdminClientActivitiesPage from "./pages/admin/client/AdminClientActivitiesPage";
import StaffActivitiesPage from "./pages/admin/staff/StaffActivitiesPage";
import AdminClientProfilePage from "./pages/admin/client/AdminClientProfilePage";
import AdminPage from "./pages/admin/admin/AdminPage";
import SuperAdminPage from "./pages/admin/superAdmin/SuperAdminPage";
import DashboardPage from "./pages/admin/DashboardPage";
import AdminDashboardLayout from "./layouts/AdminDashboardLayout";
import AccountVerificationPage from "./pages/auth/AccountVerificationPage";
import ResendActivationLinkPage from "./pages/auth/ResendActivationLinkPage";
import ViewTrendingPost from "./pages/ViewTrendingPost";
import AllDesignersPage from "./components/dashboard/creator/fashionDesigners/AllFashionDesigners";
import FashionDesigners from "./pages/FashionDesigners";
import CreatePostPage from "./pages/creator/CreatePostPage";
import FrequentlyAskedQuestionsPage from "./pages/FrequentlyAskedQuestionsPage";
import ViewSearchPostPage from "./pages/ViewSearchPostPage";
import AdminLoginPage from "./pages/admin/admin/AdminLoginPage";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/trending' element={<TrendingPage/>} />
          <Route path='/trending/:id' element={<ViewTrendingPost/>} />
          <Route path='/trending/:id/view' element={<ViewSearchPostPage/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/faqs' element={<FrequentlyAskedQuestionsPage/>} />
          <Route path='/fashionDesigners' element={<AllDesignersPage/>} />
          {/* <Route path='/all-fashion-designers' element={<AllDesignersPage/>} /> */}
            <Route path='verifyAccount' element={<AccountVerificationPage/>} />
            <Route path='resendVerificationLink' element={<ResendActivationLinkPage/>} />
          <Route path='/creator' element={<CreatorLayout/>}>
            <Route path='profile' element={<ProfilePage/>} />
            <Route path='create-post' element={<CreatePostPage/>} />
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
          {/* admin */}
              <Route path='/admin/login' element={<AdminLoginPage/>} />
          <Route path='/admin' element={<AdminLayout/>}>
            <Route path='dashboard' element={<AdminDashboardLayout/>} >
              <Route index element={<DashboardPage/>} />
              <Route path=":id/profile" element={<AdminPage/>} />
              <Route path=":id/b" element={<AdminSingleClientBookingPage/>} />
              <Route path=":id/p" element={<CreatorSinglePaymentPage/>} />
              <Route path=":id/s" element={<CreatorSingleSubscriptionPage/>} />
              <Route path=":id/profile/ct" element={<AdminClientProfilePage/>} />
              <Route path=":id/profile/cn" element={<AdminCreatorProfilePage/>} />
            </Route>
            <Route path='creators' element={<AdminCreatorLayout/>} >
                <Route index element={<AdminCreatorsPage/>}/>
                <Route path="subscriptions" element={<CreatorSubscriptionPage/>}/>
                <Route path="subscriptions/:id/s" element={<CreatorSingleSubscriptionPage/>}/>
                <Route path=":id/profile/ct" element={<AdminCreatorProfilePage/>}/>
                <Route path="payments" element={<CreatorPaymentPage/>}/>
                <Route path="payments/:id/p" element={<CreatorSinglePaymentPage/>}/>
            </Route>

            {/* client */}
            <Route path='clients' element={<AdminClientLayout/>} >
                <Route index element={<AdminClientsPage/>}/>
                <Route path="bookings" element={<AdminClientBookingPage/>}/>
                <Route path="bookings/:id/b" element={<AdminSingleClientBookingPage/>}/>
                <Route path=":id/profile/cn" element={<AdminClientProfilePage/>}/>
                <Route path="complaints & disputes" element={<AdminClientComplaints/>}/>
                <Route path="complaints & disputes/:id" element={<AdminSingleClientComplaints/>}/>
                <Route path="activities" element={<AdminClientActivitiesPage/>}/>
            </Route>
            <Route path='admin' element={<AdminClientLayout/>} >
                <Route index element={<AdminPage/>}/>
                <Route path="staffActivities/" element={<StaffActivitiesPage/>}/>
            </Route>
            <Route path='super admin' element={<AdminClientLayout/>} >
                <Route index element={<SuperAdminPage/>}/>
                <Route path="staffActivities/" element={<StaffActivitiesPage/>}/>
            </Route>
          </Route>
      </Route>
    )
)

export default router 