import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Login from '../component/Login';
import Register from '../component/Register';
import Erropage from '../component/Erropage/Erropage';
import MyQueries from '../Pages/MyQueries';
import AddQueries from '../component/AddQueries/AddQueries';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <Erropage></Erropage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: async () => {
          // Fetch data from 'fakedata.json'
          const fakeDataResponse = await fetch('fakedata.json');
          const fakeData = await fakeDataResponse.json();

          return { fakeData };
        },
      },
      {
        path: '/myQueries',
        element: <MyQueries></MyQueries>,
      },
      {
        path: '/AddQueries',
        element: <AddQueries></AddQueries>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
