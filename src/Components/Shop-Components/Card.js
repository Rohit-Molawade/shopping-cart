import './Card.css';
import Amount from './Amount';
import { useState } from 'react';

const Card = (props) => {
  const { Name, Image, Cost, Category, addItem, itemArray, setItemArray } = props;
  const [warning, setWarning] = useState(false);

  const handleClick = () => {
    if (itemArray.some((item) => item.Name === Name)) {
      setItemArray(
        itemArray.map((item) => {
          if (item.Name === Name) {
            item.Amount = item.Amount + 1;
          }
          return item;
        })
      );
    } else {
      addItem({ Name: Name, Image: Image, Cost: Cost, Category: Category, Amount: 1 });
    }
  };

  return (
    <div className="card">
      <img src={Image} alt={Name} id="displayIcon" />
      <div className="info">
        <span>{Name}</span>
        <button type="button" className="add-button" onClick={handleClick}>
          ADD
        </button>
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
