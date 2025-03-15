import './App.css';
import Header from './components/global/Header';
import {BrowserRouter,createRoutesFromElements, Routes,Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts/Layout';
import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import Trending from './pages/Trending';

const router = createBrowserRouter(
      createRoutesFromElements(
        
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/trending' element={<Trending/>} />
        </Route>
      )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
