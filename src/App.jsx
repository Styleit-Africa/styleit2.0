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

const router = createBrowserRouter(
      createRoutesFromElements(
        
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/trending' element={<Trending/>} />
            <Route path='/history' element={<History/>} />
            <Route path='/subscriptions' element={<Subscriptions/>} />
            <Route path='/subscriptions/:id' element={<ShowSubscription/>} />
            <Route path='/subscriptions/:id/proceed' element={<ProceedSubscription/>} />
        </Route>
      )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
