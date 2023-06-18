import React, { useState } from 'react';
import './dragdrop.css';
import NFt3 from "assets/img/nfts/Nft3.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import NftCard from "components/card/NftCard";

const DraggableCard = ({ card, onDragStart }) => {
  const handleDragStart = (event) => {
    onDragStart(event, card);
  };

  return (
    <div
      className="draggable-card"
      draggable="true"
      onDragStart={handleDragStart}
    >
      {card.title}
    </div>
  );
};

const VerticalComponent = ({ title, cards, onDrop, onDragOver, addCard }) => {
  const handleDrop = (event) => {
    event.preventDefault();
    const card = JSON.parse(event.dataTransfer.getData('card'));
    onDrop(card);
  };

  return (
    <div className="vertical-component" onDrop={handleDrop} onDragOver={onDragOver}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2 style={{ width: '90%' }}>{title} <spam style={{backgroundColor:"#eee",borderRadius:'50%'}}>&nbsp;&nbsp;{cards.length}&nbsp;&nbsp;</spam></h2>
        {
          (title === "To Do") &&
          <div className="add-card" onClick={addCard} style={{ width: '10%' }}>
            +
          </div>
        }
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            draggable="true"
            onDragStart={(event) => event.dataTransfer.setData('card', JSON.stringify(card))}
          >
            <NftCard
              bidders={[avatar1, avatar2, avatar3]}
              title={card.title}
              author={card.description}
              price="13"
              image={NFt3}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


const DashboardP4 = () => {
  const [component1CardsP4, setcomponent1CardsP4] = useState([{ title: "Default Card21", description: "This is a default card." }]);
  const [component2CardsP4, setcomponent2CardsP4] = useState([{ title: "Default Card22", description: "This is a default card." },{ title: "Default Card23", description: "This is a default card." },{ title: "Default Card24", description: "This is a default card." }]);
  const [component3CardsP4, setcomponent3CardsP4] = useState([{ title: "Default Card25", description: "This is a default card." },{ title: "Default Card26", description: "This is a default card." }]);

  const handleDropComponent1 = (card) => {
    setcomponent1CardsP4((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent2CardsP4((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent3CardsP4((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent1CardsP4((prevCards) => [...prevCards, card]);
  };

  const handleDropComponent2 = (card) => {
    setcomponent1CardsP4((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent2CardsP4((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent3CardsP4((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent2CardsP4((prevCards) => [...prevCards, card]);
  };

  const handleDropComponent3 = (card) => {
    setcomponent1CardsP4((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent2CardsP4((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent3CardsP4((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent3CardsP4((prevCards) => [...prevCards, card]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleAddCard = () => {
    const title = window.prompt('Enter card title');
    const description = window.prompt('Enter card description');
    if (title && description) {
      const newCard = { title, description };
      setcomponent1CardsP4((prevCards) => [...prevCards, newCard]);
    }
  };

  return (
    <div className="homeContainer">
      <VerticalComponent
        title="To Do"
        cards={component1CardsP4}
        onDrop={handleDropComponent1}
        onDragOver={handleDragOver}
        addCard={handleAddCard}
        className="to-do"
      />
      <VerticalComponent
        title="On Progress"
        cards={component2CardsP4}
        onDrop={handleDropComponent2}
        onDragOver={handleDragOver}
        className="on-progress"
      />
      <VerticalComponent
        title="Done"
        cards={component3CardsP4}
        onDrop={handleDropComponent3}
        onDragOver={handleDragOver}
        className="done"
      />
    </div>
  );
};

export default DashboardP4;