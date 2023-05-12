import logo from "../assets/Logoretinklogo.png";

const Navbar = () => {
  return (
    <div class="p-8">
      <a href="/" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        <img
          class="h-8 w-auto p-8"
          src={logo}
          alt="rethink logo"
          className="logo"
        />
      </a>
    </div>
  );
};

export default Navbar;
