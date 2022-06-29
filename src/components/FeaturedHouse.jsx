import House from "./House";

const FeaturedHouse = ({ house }) => {
  if (house)
    return (
      <div>
        <div className="row featuredHouse">
          <h3 className="col-md12 text-center">Featured House</h3>
        </div>
        <House house={house} />
      </div>
    );
};

export default FeaturedHouse;
