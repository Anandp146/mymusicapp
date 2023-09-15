import React from "react";
import { ScaleLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex z-50 w-full h-screen justify-center items-center space-x-2 bg-loaderOverlay">
      <div className="text-center">
        <div className="w-40 h-40 min-w-[160px] bg-red-600 rounded-full flex items-center justify-center relative">
          <ScaleLoader color="#36d7b7" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
