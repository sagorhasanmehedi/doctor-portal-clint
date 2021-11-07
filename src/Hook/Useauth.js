import { useContext } from "react";
import { mycontext } from "../Context/AuthProvider/AuthProvider";

const Useauth = () => {
  return useContext(mycontext);
};
export default Useauth;
