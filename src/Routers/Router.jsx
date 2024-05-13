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
import PrivateRoute from '../component/Private/PrivateRoute';

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

          const LatestCard = await fetch('http://localhost:5000/AddRecent');
          const Recent = await LatestCard.json();

          return { fakeData, Recent };
        },
      },
      {
        path: '/myQueries',
        element: (
          <PrivateRoute>
            <MyQueries></MyQueries>
          </PrivateRoute>
        ),
      },
      {
        path: '/AddQueries',
        element: (
          <PrivateRoute>
            <AddQueries></AddQueries>
          </PrivateRoute>
        ),
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
        element: (
          <PrivateRoute>
            <QueriesDetails></QueriesDetails>
          </PrivateRoute>
        ),
      },
      {
        path: '/allQueries',
        element: <AllQueries></AllQueries>,
      },
      {
        path: '/myreccomendetion',
        element: (
          <PrivateRoute>
            <MyRecommmendation></MyRecommmendation>
          </PrivateRoute>
        ),
      },
      {
        path: '/Forme',
        element: (
          <PrivateRoute>
            <ForME></ForME>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
