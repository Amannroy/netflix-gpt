import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/redux/slices/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../../utils/constants/constants";
import { toggleGPTSearchView } from "../../utils/redux/slices/gptSlice";
import { changeLanguage } from "../../utils/redux/slices/configSlice";
import { auth } from "../../utils/api/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  // I have to setup onAuthStateChanged event listen for once thats why using useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // If User is Signed In / Signed Up then put the data in the store(Update my store through dispatch)
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse"); //If the user is logged in then always redirect him to browse page
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/"); // If the user is not logged in then navigate the user to login page
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
        {user && (
          <div className="flex p-2 justify-between">
            {showGPTSearch && (
              <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              {showGPTSearch ? "Home Page" : "GPT Search"}
            </button>
            <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
            <button onClick={handleSignOut} className="font-bold text-white">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
