import videoDashboard from "../assets/videodashboard.png";

const VideoDashBoard = () => {
  return (
    <div className="max-w-200 items-center justify-center flex flex-col mt-52">
      <div>
        <h2 className="logo-text font-bold">EXPLAINER VIDEO</h2>
      </div>
      <div>
        <img src={videoDashboard} alt="video" className="dashboard mt-16" />
      </div>
    </div>
  );
};

export default VideoDashBoard;
