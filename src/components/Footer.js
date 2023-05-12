import logo from "../assets/Logoretinklogo.png";
import socialIcons from "../assets/socialmediaicons.png";

const Footer = () => {
  return (
    <div className="bg-slate-300">
      <div className="container p-2 lg:px-8 max-w-screen-2xl mx-auto">
        <img src={logo} alt="" className="p-4 md:p-8 lg:p-12" />
      </div>
      <div className="flex flex-col md:flex-row p-2 lg:px-8 lg:mb-16 max-w-screen-2xl mx-auto md:ml-36 mb-20 md:mb-0 gap-16 justify-evenly">
        <div className="text-center md:text-left">
          <h1 className="font-bold text-2xl mb-2 md:mb-0">
            Product by Retink Media UG
          </h1>
          <h1 className="font-bold text-2xl">Bonn, Germany</h1>
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-bold text-2xl mb-2 md:mb-0">Get Early Access</h1>
          <h1 className="font-bold text-2xl">Provide Feedback</h1>
        </div>
        <div className="text-center md:text-left sm:text-center mx-auto mt-4">
          <h1 className="mb-2">Connect with Us</h1>
          <img src={socialIcons} alt="social media icons" className="mt-2" />
        </div>
      </div>
      <div className="bg-black">
        <div className="p-2 lg:px-8 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between">
          <h1 className="text-white font-bold p-4 md:p-12">
            Copyright © 2023 Retink
          </h1>
          <div className="flex flex-col md:flex-row">
            <h1 className="text-white p-4 md:p-12">Privacy Policy</h1>
            <h1 className="text-white p-4 md:p-12">Terms of Service</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
