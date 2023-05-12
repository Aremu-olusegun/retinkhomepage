import PropTypes from "prop-types";

const Card = ({ image, title, description, tags }) => {
  return (
    <div className="md:w-1/2 lg:w-1/3 p-2 md:p-3 flex items-center">
      <div className="max-w-sm mx-auto rounded overflow-hidden">
        <img
          className="w-full h-48 object-cover rounded-3xl mb-2"
          src={image}
          alt={title}
        />
        <div className="">
          <div className="font-bold text-xl mb-2 card-title">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const CardGroup = ({ cards }) => {
  return (
    <div className="max-w-screen-lg mx-auto px-1 md:px-0">
      <div className="flex flex-wrap -mx-2 md:-mx-3 sm: justify-center">
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

CardGroup.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default CardGroup;
