import React, { Component } from "react";

const emojis = [
  { id: 1, symbol: "😃" },
  { id: 2, symbol: "😊" },
  { id: 3, symbol: "😎" },
  { id: 4, symbol: "🤩" },
  { id: 5, symbol: "😍" },
];

class App extends Component {
  constructor(props) {
    super(props);
    const storedVotes = JSON.parse(localStorage.getItem("votes")) || {};
    this.state = {
      votes: emojis.reduce((acc, emoji) => {
        acc[emoji.id] = storedVotes[emoji.id] || 0;
        return acc;
      }, {}),
      winner: null,
    };
  }

  handleVote = (id) => {
    this.setState(
      (prevState) => {
        const updatedVotes = {
          ...prevState.votes,
          [id]: prevState.votes[id] + 1,
        };
        localStorage.setItem("votes", JSON.stringify(updatedVotes));
        return { votes: updatedVotes };
      }
    );
  };

  showResults = () => {
    const { votes } = this.state;
    const winnerId = Object.keys(votes).reduce((a, b) =>
      votes[a] > votes[b] ? a : b
    );
    this.setState({ winner: winnerId });
  };

  clearVotes = () => {
    const clearedVotes = emojis.reduce((acc, emoji) => {
      acc[emoji.id] = 0;
      return acc;
    }, {});
    localStorage.removeItem("votes");
    this.setState({ votes: clearedVotes, winner: null });
  };

  render() {
    const { votes, winner } = this.state;

    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Голосування за найкращий смайлик
        </h1>
        <div className="smile">
          {emojis.map((emoji) => (
            <div
              key={emoji.id}
              className="flex flex-col items-center cursor-pointer transition hover:scale-110"
              onClick={() => this.handleVote(emoji.id)}
            >
              <span className="smileLogo">{emoji.symbol}</span>
              <span className="text-lg mt-1">{votes[emoji.id]}</span>
            </div>
          ))}
        </div>
        <div className="btn">
        <button
          onClick={this.showResults}
          className="btnClick"
        >
          Показати результати
        </button>
        <button
          onClick={this.clearVotes}
          className="btnClick"
        >
          Очистити результати
        </button>
        </div>

        {winner && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold mb-2">Результати голосування:</h2>
            <p className="text-xl">Переможець:</p>
            <div className="text-7xl my-6 animate-bounceOnce">
  {emojis.find((e) => e.id === parseInt(winner)).symbol}
</div>

            <p className="text-lg">
              Кількість голосів: {votes[winner]}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
