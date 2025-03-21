import './App.css';
import Header from './components/global/Header';
import {BrowserRouter,createRoutesFromElements, Routes,Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
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
import Profile from './components/dashboard/profile/Profile';
import Bookings from './components/dashboard/bookings/Bookings';
import Post from './components/dashboard/post/Post';
import ProfilePage from './pages/creator/ProfilePage';
import BookingPage from './pages/creator/BookingPage';
import PostPage from './pages/creator/PostPage';

const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/creator' element={<CreatorLayout/>}>
              <Route path='trending' element={<Trending/>} />
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

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
