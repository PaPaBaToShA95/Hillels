import React, { useState, useEffect } from "react";
import { getVotes, saveVotes, clearVotes } from "../utils/storage";

const emojis = ["🤩", "😁", "😐", "😢", "😡"];

const EmojiVote = () => {

  const [votes, setVotes] = useState(() => {
    const saved = getVotes();
    return saved || Object.fromEntries(emojis.map((emoji) => [emoji, 0]));
  });

  const [showResults, setShowResults] = useState(false);

  const handleVote = (emoji) => {
    const newVotes = { ...votes, [emoji]: votes[emoji] + 1 };
    setVotes(newVotes);
    saveVotes(newVotes);
  };


  const toggleResults = () => {
    setShowResults((prev) => !prev);
  };


  const resetVotes = () => {
    const emptyVotes = Object.fromEntries(emojis.map((e) => [e, 0]));
    setVotes(emptyVotes);
    clearVotes();
  };

  return (
    <div className="max-w-xl mx-auto p-4 text-center space-y-4">
      <h1 className="text-2xl font-bold">Голосування за смайлик</h1>

      <div className="flex justify-center space-x-4 text-4xl">
        {emojis.map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleVote(emoji)}
            className="smiley hover:scale-110 transition-transform"
            title={`Голосувати за ${emoji}`}
          >
            {emoji}
          </button>
        ))}
      </div>

      <div className="space-x-4 mt-14">
        <button
          onClick={toggleResults}
          className="btnClick hover:scale-110 transition-transform"
        >
          {showResults ? "Сховати результати" : "Показати результати"}
        </button>

        <button
          onClick={resetVotes}
          className="btnClick hover:scale-110 transition-transform"
        >
          Очистити результати
        </button>
      </div>
      <div className="mt-4">
        {showResults && (
          <div className="mt-12 space-y-2">
            {emojis.map((emoji) => (
              <div key={emoji} className="text-lg">
                {emoji}: {votes[emoji]} голосів
              </div>
            ))}
            <div className="text-lg">
              Найкращий смайлик:{" "}
              {
                Object.entries(votes).reduce(
                  (a, b) => (a[1] > b[1] ? a : b),
                  [null, 0]
                )[0]
              }
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default EmojiVote;
