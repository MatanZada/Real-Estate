import { useParams } from "react-router-dom";
import House from "../House";

const HouseFormQuery = ({ allHouses }) => {
  const { id } = useParams();
  const house = allHouses.find((house) => house.id === parseInt(id));

  if (!house) return <div>House not Found.</div>;
  return <House house={house}></House>;
};

export default HouseFormQuery;
