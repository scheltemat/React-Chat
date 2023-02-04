import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AuthContext from './context/AuthContext'

//Styles
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

//Components
import RequireAuth from './components/auth/RequireAuth'
import Chat from './components/Chat';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {

    const [auth, setAuth] = useState(false)
    const value = {auth, setAuth};

  return (
    <React.StrictMode>
      <AuthContext.Provider value={value}>

          <Routes>
            
              <Route path="/" element={<RequireAuth auth={auth}> <Chat/> </RequireAuth>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
            
          </Routes>

      </AuthContext.Provider>
    </React.StrictMode>
  )
}

export default App