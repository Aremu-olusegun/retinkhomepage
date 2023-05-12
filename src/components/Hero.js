import avatar from "../assets/Retink-avatar.png";

const Hero = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="flex flex-col md:flex-row items-center justify-evenly md:px-4 lg:px-8">
        <div className="md:w-1/2">
          <h1 className="font-bold tracking-tight text-gray-900 text-4xl md:text-6xl lg:text-7xl">
            Get Advanced AI
            <br />+ Export Created <span className="logo-text">Logos</span>
          </h1>
          <div className="mt-12">
            <p className="mt-6 leading-2 text-gray-600 text-lg md:text-xl">
              Boost your sales 10x faster with content customized by our unique
              partnership of human creativity and AI optimization
            </p>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
