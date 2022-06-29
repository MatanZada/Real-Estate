import { useEffect, useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../src/components/Header";
import FeaturedHouse from "../src/components/FeaturedHouse";
import SearchResults from "./components/search-results/SearchResults";
import HouseFormQuery from "./components/house/HouseFormQuery";
import HouseFilter from "./components/HouseFilter";
function App() {
  // hook - היא פונקציה שמתחברת למורכבות מסוימת
  /* A hook that is used to set the state of the component. */
  const [allHouses, setAllHouses] = useState([]);
  /* Fetching the data from the server and setting it to the state. */
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
    //subscribe

    // return () => {
    //   //unsubscribe
    // };
  }, []);

  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <div className="container">
      <Header subtitle="Providing houses all over the world" />
      <HouseFilter allHouses={allHouses} />
      <Routes>
        <Route
          path="/"
          element={<FeaturedHouse house={featuredHouse} />}
        ></Route>

        <Route
          path="/searchresults/:country"
          element={<SearchResults allHouses={allHouses} />}
        ></Route>

        <Route
          path="/house/:id"
          element={<HouseFormQuery allHouses={allHouses} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
