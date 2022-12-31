import React, { useState } from "react";
import "./styles.css";
import TinderCard from "react-tinder-card";
const Tindercard = () => {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcFsMROERkNpQ1EDEobR88Ps-DdKC5lv0gZg&usqp=CAU",
    },
    {
      name: "Jeff Bezos",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc0xcNWJzvOJwTHzvecVYvGvBwjBHIQ2bAXA&usqp=CAU",
    },
  ]);

  const swiped = (dir, nameToDelete) => {
    console.log("removing " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCard__container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Tindercard;
