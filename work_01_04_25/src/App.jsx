import React from "react";
import vaderImage from "./assets/Darthvader3.webp";
import lukeImage from "./assets/LukeSkywalker.webp";
import c3poImage from "./assets/C3PO.png";
import r2d2Image from "./assets/R2D2.png";
import leiaImage from "./assets/LeiaOrgana.webp";

const characters = [
  {
    name: "Дарт Вейдер",
    height: "202 см",
    mass: "136 кг",
    hair_color: "дані відсутні",
    skin_color: "Світлий",
    eye_color: "Жовтий",
    birth_year: "41.9BBY",
    gender: "Чоловік",
    image: vaderImage,
  },
  {
    name: "Люк Скайвокер",
    height: "172 см",
    mass: "77 кг",
    hair_color: "Блонд",
    skin_color: "Світлий",
    eye_color: "Блакитний",
    birth_year: "19BBY",
    gender: "Чоловік",
    image: lukeImage,
  },
  {
    name: "C-3PO",
    height: "167 см",
    mass: "75 кг",
    hair_color: "дані відсутні",
    skin_color: "Золотий",
    eye_color: "Жовтий",
    birth_year: "112BBY",
    gender: "дані відсутні",
    image: c3poImage,
  },
  {
    name: "R2-D2",
    height: "96 см",
    mass: "32 кг",
    hair_color: "дані відсутні",
    skin_color: "Білий, синій",
    eye_color: "Червоний",
    birth_year: "33BBY",
    gender: "дані відсутні",
    image: r2d2Image,
  },
  {
    name: "Лея Органа",
    height: "150 см",
    mass: "49 кг",
    hair_color: "Коричневий",
    skin_color: "Світлий",
    eye_color: "Коричневий",
    birth_year: "19BBY",
    gender: "Жінка",
    image: leiaImage,
  },
];

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <div>
        <h2>{character.name}</h2>
        <div>
          <p>Зріст: {character.height}</p>
          <p>Вага: {character.mass}</p>
          <p>Колір волосся: {character.hair_color}</p>
          <p>Колір шкіри: {character.skin_color}</p>
          <p>Колір очей: {character.eye_color}</p>
          <p>Дата народження: {character.birth_year}</p>
          <p>Стать: {character.gender}</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="character-list">
      {characters.map((char, index) => (
        <CharacterCard key={index} character={char} />
      ))}
    </div>
  );
};

export default App;
