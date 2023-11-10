import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LogInPage from './Pages/LogIn.js'
import {AuthProvider} from './Context/AuthContext.js'
import PrivateRoute from './Components/PrivateRoute.js';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route exact path={['/']} component={LogInPage}></Route>
          </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
