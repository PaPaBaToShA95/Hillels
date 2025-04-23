import React from "react";
import { useDispatch } from "react-redux";
import { clearPersonData } from "../features/people/peopleSlice";
import { persistor } from "../redux/store";

const Footer = () => {
  const dispatch = useDispatch();

  const handleClearData = () => {
    dispatch(clearPersonData());
    persistor
      .purge()
      .then(() => {
        console.log("Local Storage cleared");

      }
      )
      .catch((error) => {
        console.error("Error clearing Local Storage:", error);
      });
  };

  return (
    <footer className="p-4 text-center mt-auto">
      {" "}
      <button

        className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded transition-colors duration-200"
        onClick={handleClearData}
      >
        Clear Data
      </button>
    </footer>
  );
};

export default Footer;
