import { useEffect, useState } from "react";
import initianizfirebase from "../Pages/Login/Firebase/Init.firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import { SettingsSystemDaydreamOutlined } from "@mui/icons-material";

initianizfirebase();
const Usefirebase = () => {
  const [isloding, setisloding] = useState(true);
  const [user, setuser] = useState({});
  const [erroemessage, seterrormessage] = useState("");
  const [admin, setadmin] = useState(false);
  const [token, settoken] = useState("");

  const auth = getAuth();

  //   create password based acount
  const createacount = (email, password, name, history) => {
    setisloding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newuser = { email, displayName: name };
        setuser(newuser);

        // get user data
        setuserdata(name, email, "POST");

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            console.log("profile name update");
          })
          .catch((error) => {
            console.log(error.message);
          });

        history.push("/");
      })
      .catch((error) => {
        seterrormessage(error.message);
        // ..
      })
      .finally(() => setisloding(false));
  };

  // sign in
  const signin = (email, password, location, history) => {
    console.log("inside log in");
    const redirect_URL = location.state?.from || "/";
    setisloding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.push(redirect_URL);
      })
      .catch((error) => {
        seterrormessage(error.message);
      })
      .finally(() => setisloding(false));
  };

  //   log out
  const logout = () => {
    setisloding(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setisloding(false));
  };

  // google log in
  const googlelogin = (location, history) => {
    const googleprovider = new GoogleAuthProvider();
    setisloding(true);
    const redirect_URL = location.state?.from || "/";

    signInWithPopup(auth, googleprovider)
      .then((result) => {
        setuserdata(result.user.displayName, result.user.email, "PUT");
        history.push(redirect_URL);
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setisloding(false));
  };

  //   user state change
  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((Idtoken) => {
          settoken(Idtoken);
        });

        setuser(user);
      } else {
        setuser({});
      }
    });
    setisloding(false);

    return unsubscrib;
  }, []);

  // set user in databace
  const setuserdata = (name, email, method) => {
    const data = { displayName: name, email };
    fetch("https://still-stream-94393.herokuapp.com/user", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  // chaking admin
  useEffect(() => {
    fetch(`https://still-stream-94393.herokuapp.com/user/admin/${user.email}`)
      .then((res) => res.json())
      .then((data) => setadmin(data));
  }, [user.email]);

  return {
    user,
    admin,
    logout,
    token,
    signin,
    isloding,
    erroemessage,
    createacount,
    googlelogin,
  };
};

export default Usefirebase;
