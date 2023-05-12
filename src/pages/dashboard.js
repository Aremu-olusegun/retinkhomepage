import Logo from "../assets/Retink-avatar.png";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds delay
  }, []);

  return (
    <div className="min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <img src={Logo} alt="Logo" className="w-fit h-48 animate-pulse" />
        </div>
      ) : (
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-bold text-grey-600 mb-8 text-4xl">
            Welcome to the BETA program
          </h1>
          <p className="text-lg text-black">
            You are now logged in and authenticated with Firebase. This is a
            protected page that only authenticated users can access.
          </p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
