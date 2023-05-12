import { useState } from "react";
import app from "../Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signInNewUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("Successfully created an account");
        navigate("/dashboard");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="mb-4 text-2xl text-violet-800 font-bold">
        Sign Up For The BETA to see more
      </h1>
      <div className="mb-4 mt-4 mx-auto">
        <button className="mr-2 border border-purple-400 px-4 py-2 rounded-lg text-purple-300 font-bold mb-6">
          <span className="shadow-sm">Business Name</span>
        </button>
        <div className="flex flex-col md:flex-row">
          <input
            className="border border-purple-400 px-3 py-2 rounded-lg text-purple-300 font-bold mb-3 md:mb-0 md:mr-3 flex-1"
            value={email}
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-purple-400 px-3 py-2 rounded-lg text-purple-300 font-bold mb-3 md:mb-0 md:ml-3 flex-1"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-4 mt-6">
        <button
          onClick={signInNewUser}
          className="mr-2 bg-purple-700 px-4 py-2 rounded-lg text-white shadow-lg"
        >
          Notify Me
        </button>
      </div>
      <div>
        <button
          className="text-2xl underline hover:no-underline
          mr-2 border-purple-700 border-2 rounded-lg p-2 text-blue-500 mt-6"
        >
          Sign up as a freelance partner
        </button>
      </div>
    </div>
  );
};

export default SignUp;
