import React, { useState } from 'react';
import './dragdrop.css';
import NFt2 from "assets/img/nfts/Nft2.png";
import NFt4 from "assets/img/nfts/Nft4.png";
import NFt3 from "assets/img/nfts/Nft3.png";
import NFt5 from "assets/img/nfts/Nft5.png";
import NFt6 from "assets/img/nfts/Nft6.png";
import avatar1 from "assets/img/avatars/avatar1.png";
import avatar2 from "assets/img/avatars/avatar2.png";
import avatar3 from "assets/img/avatars/avatar3.png";
import NftCard from "components/card/NftCard";
import { color } from '@chakra-ui/system';

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
              price="0.91"
              image={NFt3}
            />
          </div>
        ))}
      </div>
    </div>
  );
};


const Dashboard = () => {
  const [component4Cards, setComponent4Cards] = useState([{ title: "Brainstorming", description: "Brainstorming brings team members' diverse experience into play." }]);
  const [component5Cards, setComponent5Cards] = useState([{ title: "Default Card", description: "This is a default card." },{ title: "Default Card", description: "This is a default card." }]);
  const [component6Cards, setComponent6Cards] = useState([{ title: "Default Card", description: "This is a default card." },{ title: "Default Card", description: "This is a default card." }]);

  const handleDropComponent4 = (card) => {
    setComponent4Cards((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setComponent5Cards((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setComponent6Cards((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setComponent4Cards((prevCards) => [...prevCards, card]);
  };

  const handleDropComponent5 = (card) => {
    setComponent4Cards((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setComponent5Cards((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setComponent6Cards((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setComponent5Cards((prevCards) => [...prevCards, card]);
  };

  const handleDropComponent6 = (card) => {
    setComponent4Cards((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setComponent5Cards((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setComponent6Cards((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setComponent6Cards((prevCards) => [...prevCards, card]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleAddCard = () => {
    const title = window.prompt('Enter card title');
    const description = window.prompt('Enter card description');
    if (title && description) {
      const newCard = { title, description };
      setComponent4Cards((prevCards) => [...prevCards, newCard]);
    }
  };

  return (
    <div className="homeContainer">
      <VerticalComponent
        title="To Do"
        cards={component4Cards}
        onDrop={handleDropComponent4}
        onDragOver={handleDragOver}
        addCard={handleAddCard}
        className="to-do"
      />
      <VerticalComponent
        title="On Progress"
        cards={component5Cards}
        onDrop={handleDropComponent5}
        onDragOver={handleDragOver}
        className="on-progress"
      />
      <VerticalComponent
        title="Done"
        cards={component6Cards}
        onDrop={handleDropComponent6}
        onDragOver={handleDragOver}
        className="done"
      />
    </div>
  );
};

export default Dashboard;