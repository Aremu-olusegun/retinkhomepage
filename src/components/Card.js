import React from "react";
import { useSpring, animated } from "react-spring";
import PropTypes from "prop-types";

const Card = ({ image, title, description }) => {
  const [hover, setHover] = React.useState(false);
  const animationProps = useSpring({
    transform: hover ? "scale(1.05)" : "scale(1)",
    boxShadow: hover
      ? "0 10px 20px rgba(0,0,0,0.2)"
      : "0 5px 10px rgba(0,0,0,0.1)",
  });

  return (
    <animated.div
      style={animationProps}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="transition duration-100 ease-in-out flex flex-col bg-white rounded-lg shadow-md lg:w-[350px] m-6 overflow-hidden sm:w-52 text-center p-8 hover:text-white hover:bg-violet-500"
    >
      <img src={image} alt="" className="h-12 m-6 w-[50px] mx-auto" />
      <h2 className="text-center px-2 pb-5">{title}</h2>
      <p>{description}</p>
    </animated.div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
