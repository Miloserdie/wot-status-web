import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import SignIn from "./components/SignIn";
import Account from "./components/Account";
import SearchPlayers from "./components/SearchPlayers";
import ProtectedRoute from "./components/ProtectedRoute";

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
              <Route path={'*'} element={<div>404</div>}/>
          </Routes>

      </>
  )
}

export default App;
