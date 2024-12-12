import React, { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
const Header = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });
  }

  // I have to setup onAuthStateChanged event listen for once thats why using useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        // If User is Signed In / Signed Up then put the data in the store(Update my store through dispatch)
         dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          navigate("/browse");  //If the user is logged in then always redirect him to browse page
      } else {
        // User is signed out
        dispatch(removeUser()); 
        navigate('/'); // If the user is not logged in then navigate the user to login page

      }
    });
 
    // Unsubscribe when component unmounts
    return () => unsubscribe(); 
  }, []);

  return (
    <>
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <img  
    className='w-44'
    src={LOGO}
    alt="logo"
    />
    {user && (
      <div className='flex p-2'>
      <img className='w-12 h-12' alt="usericon" src={user?.photoURL} />
      <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
    </div>
    )}
    </div>
    </>
  )
}

export default Header