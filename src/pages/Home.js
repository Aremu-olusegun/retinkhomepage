import Cards from "../components/Cards";
import Hero from "../components/Hero";
import ImagesComp from "../components/ImagesComp";
import SignUp from "../components/SignUp";
import Transform from "../components/Transform";
import Transform2 from "../components/Transform2";
import VideoDashBoard from "../components/VideoDashBoard";
import CardGroup from "../components/AllCards";

const imageData = [
  {
    image:
      "https://images.unsplash.com/photo-1620912189865-1e8a33da4c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    title: "Logos",
    description:
      " Have a unique & creative logo designed to express and represent your brand identity.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Blog Writing",
    description:
      " Write SEO enriched blog posts as long or short articles on any topic of your choice.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1547194936-28214bd75193?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Animated Videos",
    description:
      "Bring animated characters to life to keep your viewers engaged and  entertained.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Product Demo",
    description:
      "Introduce your product to potential customers in a clear and creative video.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558009250-d3d2229fdf28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    title: "Copywriting",
    description:
      "Have creative and compelling copies written to boost your product, brand, service or company.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    title: "Social Media Ads",
    description: "Boost sales and awareness with tailor made ads from experts.",
  },
  // Add more objects here as needed
];

const Home = () => {
  return (
    <div>
      <Hero />
      <VideoDashBoard />
      <Cards />
      <Transform />
      <Transform2 />
      <ImagesComp />
      <CardGroup cards={imageData} />
      <SignUp />
    </div>
  );
};

export default Home;
