import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTES } from './Routes/Routes';
import BackToTop from './Components/BackToTop';
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  const router = createBrowserRouter(ROUTES);

  return (
    <React.Fragment>
      <BackToTop />
      <RouterProvider router={router}></RouterProvider>
    </React.Fragment>
  );
}

export default App;
