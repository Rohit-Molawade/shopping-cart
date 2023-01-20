import './Card.css';
import Amount from './Amount';
import { useState } from 'react';

const Card = (props) => {
  const { Name, Image, Cost, Category, addItem, itemArray } = props;

  const [warning, setWarning] = useState(false);

  return (
    <div className="card">
      <img src={Image} alt={Name} id="displayIcon" />
      <div className="info">
        <span>{Name}</span>
        <Amount Name={Name} Image={Image} Cost={Cost} Category={Category} addItem={addItem} itemArray={itemArray} setWarning={setWarning} />
      </div>
      {warning === true ? (
        <div className="warning">
          <p>ITEM ALREADY ADDED INSIDE CART</p>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
