import React from "react";
import Header from "./Header";
import { NavLink, useNavigate } from "react-router-dom";
// import { Logo } from "../assets/img";
import { useStateValue } from "../Context/StateProvider";
// import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
// import { getAuth } from "firebase/auth";
// import { app } from "../config/firebase.config";
// import { motion } from "framer-motion";

// import { FaCrown } from "react-icons/fa";

const UserProfile = () => {
  const navigate = useNavigate();
  const [{ user }, dispatch] = useStateValue();

  // const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="w-full h-auto flex  flex-col items-center justify-center bg-primary">
      <Header />
      <div className="flex items-center border border-gray-600 p-10 cursor-pointer gap-5 ">
        <img
          className="w-60 object-cover aspect-square shadow-lg"
          src={user?.user?.imageURL}
          alt=""
          referrerpolicy="no-referrer"
        />
        <div className="flex items-center justify-center">
          <h1 className="text-2xl gap-3 font-bold ">User Name :</h1>
          <p className="text-textColor text-lg hover:text-headingColor font-semibold">
            {user?.user.name}
          </p>
          {/* <p className="flex items-center gap-2 text-xs text-gray-500 font-normal">
            Premium Member.{" "}
            <FaCrown className="text-xm -ml-1 text-yellow-500" />{" "}
          </p> */}
        </div>

        <hr />
      </div>
    </div>
  );
};

export default UserProfile;
