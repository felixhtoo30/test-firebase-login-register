import './App.css'
import { AuthProvider } from './contexts/authContext';
import Login from './components/auth/login';
import { useRoutes } from 'react-router-dom';
import Register from './components/auth/register';
import Home from './components/home';
import Header from './components/header';

function App() {

  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];

  let routesElement = useRoutes(routesArray);

  return (
    <AuthProvider>
      <Header />
      <div className='w-full h-screen flex flex-col'>{routesElement}</div>
    </AuthProvider>
  )
}

export default App
