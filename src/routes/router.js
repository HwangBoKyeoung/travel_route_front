// src/routes/router.js
import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import SubmitPage from "../pages/SubmitPage";
import App from '../App';
export const RouterInfo = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'submit',
        element: <SubmitPage />,
      },
    ],
  },
];
