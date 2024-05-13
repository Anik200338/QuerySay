import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Login from '../component/Login';
import Register from '../component/Register';
import Erropage from '../component/Erropage/Erropage';
import MyQueries from '../Pages/MyQueries';
import AddQueries from '../component/AddQueries/AddQueries';
import Update from '../Pages/Update';
import QueriesDetails from '../Pages/QueriesDetails';
import AllQueries from '../Pages/AllQueries';
import MyRecommmendation from '../Pages/MyRecommmendation';
import ForME from '../Pages/ForME';

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
          const fakeDataResponse = await fetch('../../fakedata.json');
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
      {
        path: '/Update/:id',
        element: <Update></Update>,
      },
      {
        path: '/craft/:id',
        element: <QueriesDetails></QueriesDetails>,
      },
      {
        path: '/allQueries',
        element: <AllQueries></AllQueries>,
      },
      {
        path: '/myreccomendetion',
        element: <MyRecommmendation></MyRecommmendation>,
      },
      {
        path: '/Forme',
        element: <ForME></ForME>,
      },
    ],
  },
]);

export default router;
