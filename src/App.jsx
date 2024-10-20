import './App.css';
import Header from './components/Header';
import {BrowserRouter,createRoutesFromElements, Routes,Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './layouts/Layout';

const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
        </Route>
      )
)

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
