import SearchResultsRow from "../search-results/Search-results-row";
import { useParams } from "react-router-dom";

const SearchResults = ({ allHouses }) => {
  const { country } = useParams();
  const filteredHouses = allHouses.filter(
    (houseData) => houseData.country === country
  );
  return (
    <div className="mt-2">
      <h4>Results for {country}:</h4>
      <table className="table table-hover">
        <tbody>
          {filteredHouses.map((houseData) => (
            <SearchResultsRow key={houseData.id} house={houseData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
