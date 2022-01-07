import React, { Suspense } from 'react';

import LandingPage from './pages/LandingPage';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './routes/Routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              <h1>loading</h1>
            </>
          }
        >
          <Routes>
            {routes.map(items => (
              <Route
                path={items.path}
                exact={items.exact}
                element={items.component}
              />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
