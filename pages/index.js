import React, { useState } from "react";
// Custom Components
// toast
import { toast } from "react-toastify";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    toast.success("Wow so easy!");
  };
  return (
    <>
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <h2 className="text-5xl font-semibold">Start Developing!</h2>
        <button onClick={handleClick} className="border">
          show
        </button>
      </div>
    </>
  );
};

export default Home;
