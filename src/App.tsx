import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import SignIn from "./components/SignIn";
import Account from "./components/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./components/NotFound";

const App = () => {
  return (
      <>
          <Routes>
              <Route path={'/'} element={<Navigate replace to={'/account'} />}/>
              <Route path={'/signIn'} element={<SignIn />}/>
              <Route
                  path={'/account/*'}
                  element={
                      <ProtectedRoute>
                          <Account />
                      </ProtectedRoute>
                  }
              />
              <Route path={'/404PageNotFound'} element={<NotFound />}/>
              <Route path={'*'} element={<Navigate replace to={'/404PageNotFound'} />}/>
          </Routes>

      </>
  )
}

export default App;
