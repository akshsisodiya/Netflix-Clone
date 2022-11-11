import './App.css';
import React, {useEffect} from 'react';
import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {auth} from './firebase'
import {useDispatch, useSelector} from 'react-redux'
import { login, logout, selectUser } from './features/userSlice';
import Profile from './pages/Profile/Profile'


function App() {
  const dispatch = useDispatch()

  const user = useSelector(selectUser)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
    })
  
    return () => {
      unsubscribe()
    }
  }, [dispatch])
  

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login /> 
        ) : (
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
