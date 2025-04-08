export const getVotes = () => {
    const data = localStorage.getItem("emojiVotes");
    return data ? JSON.parse(data) : null;
};

export const saveVotes = (votes) => {
    localStorage.setItem("emojiVotes", JSON.stringify(votes));
};

export const clearVotes = () => {
    localStorage.removeItem("emojiVotes");
};
