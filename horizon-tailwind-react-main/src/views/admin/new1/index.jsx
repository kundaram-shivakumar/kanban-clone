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


const DashboardN1 = () => {
  const [component1CardsN1, setcomponent1CardsN1] = useState([]);
  const [component2CardsN1, setcomponent2CardsN1] = useState([]);
  const [component3CardsN1, setcomponent3CardsN1] = useState([]);

  const handleDropComponent1 = (card) => {
    setcomponent1CardsN1((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent2CardsN1((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent3CardsN1((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent1CardsN1((prevCards) => [...prevCards, card]);
  };

  const handleDropComponent2 = (card) => {
    setcomponent1CardsN1((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent2CardsN1((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent3CardsN1((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent2CardsN1((prevCards) => [...prevCards, card]);
  };

  const handleDropComponent3 = (card) => {
    setcomponent1CardsN1((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent2CardsN1((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent3CardsN1((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent3CardsN1((prevCards) => [...prevCards, card]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleAddCard = () => {
    const title = window.prompt('Enter card title');
    const description = window.prompt('Enter card description');
    if (title && description) {
      const newCard = { title, description };
      setcomponent1CardsN1((prevCards) => [...prevCards, newCard]);
    }
  };

  return (
    <div className="homeContainer">
      <VerticalComponent
        title="To Do"
        cards={component1CardsN1}
        onDrop={handleDropComponent1}
        onDragOver={handleDragOver}
        addCard={handleAddCard}
        className="to-do"
      />
      <VerticalComponent
        title="On Progress"
        cards={component2CardsN1}
        onDrop={handleDropComponent2}
        onDragOver={handleDragOver}
        className="on-progress"
      />
      <VerticalComponent
        title="Done"
        cards={component3CardsN1}
        onDrop={handleDropComponent3}
        onDragOver={handleDragOver}
        className="done"
      />
    </div>
  );
};

export default DashboardN1;