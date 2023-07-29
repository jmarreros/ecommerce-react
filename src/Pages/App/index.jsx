import { useRoutes, BrowserRouter } from 'react-router-dom';
import NavBar from '../../Components/Navbar';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrders from '../MyOrders';
import MyOrder from '../MyOrder';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import CheckOutSideMenu from '../../Components/CheckOutSideMenu';
import { ShoppingCartProvider } from '../../Context';

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> }
  ]);

  return routes;
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <AppRoutes />
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
