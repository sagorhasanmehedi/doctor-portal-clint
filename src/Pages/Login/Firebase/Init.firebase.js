import { initializeApp } from "firebase/app";
import firebaseConfig from "./Config.firebase";

const initianizfirebase = () => {
  initializeApp(firebaseConfig);
};

export default initianizfirebase;
