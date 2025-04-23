import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPersonData } from "./features/people/peopleSlice";
import PersonCard from "./components/PersonCard";
import Footer from "./components/Footer";

const App = () => {
  const dispatch = useDispatch();
  const [endpoint, setEndpoint] = useState("people/1/");

  const handleFetch = () => {
    dispatch(fetchPersonData(endpoint));
  };

  return (
    <div className="p-6 max-w-xl flex flex-col justify-center items-center mx-auto space-y-4">
      <div className="text-3xl font-bold text-white">SWAPI v2.0</div>
      <span className="text-sm text-center text-gray-500">
        The Star Wars API (SWAPI) is an API for the Star Wars universe.
        <br />You can use it to get information about characters, planets, starships, vehicles, species, films and planets from the Star Wars universe.

      </span>
      <div className="text-lg flex items-center font-medium text-white">
        https://www.swapi.tech/api/
        <input
          type="text"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          placeholder="people/1/"
          className="w-full px-2  border border-white text-white rounded shadow-sm"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 ml-2 w-min text-nowrap rounded hover:bg-blue-700"
          onClick={handleFetch}
        >
          Get info
        </button>
      </div>

      <div className="text-sm text-gray-500">
        Need a hint? try <code>people/1/</code>, <code>planets/3/</code> or{" "}
        <code>starships/9/</code>
      </div>

      <PersonCard />
      <Footer />
    </div>
  );
};

export default App;
