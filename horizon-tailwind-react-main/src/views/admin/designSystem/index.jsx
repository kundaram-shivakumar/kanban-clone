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


const DashboardP3 = () => {
  const [component1CardsP3, setcomponent1CardsP3] = useState([{ title: "Default Card14", description: "This is a default card." },{ title: "Default Card15", description: "This is a default card." },{ title: "Default Card16", description: "This is a default card." }]);
  const [component2CardsP3, setcomponent2CardsP3] = useState([{ title: "Default Card17", description: "This is a default card." },{ title: "Default Card18", description: "This is a default card." },{ title: "Default Card19", description: "This is a default card." }]);
  const [component3CardsP3, setcomponent3CardsP3] = useState([{ title: "Default Card20", description: "This is a default card." }]);

  const handleDropComponent1 = (card) => {
    setcomponent1CardsP3((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent2CardsP3((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent3CardsP3((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent1CardsP3((prevCards) => [...prevCards, card]);
  };

  const handleDropComponent2 = (card) => {
    setcomponent1CardsP3((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent2CardsP3((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent3CardsP3((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent2CardsP3((prevCards) => [...prevCards, card]);
  };

  const handleDropComponent3 = (card) => {
    setcomponent1CardsP3((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent2CardsP3((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent3CardsP3((prevCards) => prevCards.filter((c) => c.title !== card.title));
    setcomponent3CardsP3((prevCards) => [...prevCards, card]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleAddCard = () => {
    const title = window.prompt('Enter card title');
    const description = window.prompt('Enter card description');
    if (title && description) {
      const newCard = { title, description };
      setcomponent1CardsP3((prevCards) => [...prevCards, newCard]);
    }
  };

  return (
    <div className="homeContainer">
      <VerticalComponent
        title="To Do"
        cards={component1CardsP3}
        onDrop={handleDropComponent1}
        onDragOver={handleDragOver}
        addCard={handleAddCard}
        className="to-do"
      />
      <VerticalComponent
        title="On Progress"
        cards={component2CardsP3}
        onDrop={handleDropComponent2}
        onDragOver={handleDragOver}
        className="on-progress"
      />
      <VerticalComponent
        title="Done"
        cards={component3CardsP3}
        onDrop={handleDropComponent3}
        onDragOver={handleDragOver}
        className="done"
      />
    </div>
  );
};

export default DashboardP3;