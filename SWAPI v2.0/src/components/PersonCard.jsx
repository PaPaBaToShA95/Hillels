import React from "react";
import { useSelector } from "react-redux";

const PersonCard = () => {
  const data = useSelector((state) => state.people.data);

  if (!data) return (
    <div className="text-gray-500 text-center">
      Information is missing, use the input field to send a request and receive
      information
    </div>
  );

  return (
    <div className="p-4 bg-gray-400 rounded shadow overflow-x-auto whitespace-pre-wrap">
      <h2 className="text-xl font-bold mb-2 text-gray-800">Response Data:</h2>
      <pre className="text-sm bg-black p-3 rounded text-white">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default PersonCard;
