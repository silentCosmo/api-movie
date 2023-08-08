import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import MovieInfo from './components/MovieInfo';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';

function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><NavBar/><Outlet/><Footer/></>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path: '/:id',
          element: <MovieInfo/>
        },
        {
          path:'/booking-tickets/:id',
          element:<BookingForm/>
        }
      ]
    },

  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
