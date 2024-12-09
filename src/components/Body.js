import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        },
    ]);

    // I have to setup onAuthStateChanged event listen for once thats why using useEffect
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid, email, displayName, photoURL} = user;
          // If User is Signed In / Signed Up then put the data in the store(Update my store through dispatch)
           dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        } else {
          // User is signed out
          dispatch(removeUser()); 

        }
      });
    }, [])

  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default Body