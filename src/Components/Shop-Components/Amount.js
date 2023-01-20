import plus from '../../images/plus.png';
import minus from '../../images/minus.png';
import './Amount.css';
import { useState } from 'react';

const Amount = (props) => {
  const { Name, Image, Cost, Category, addItem, itemArray, setWarning } = props;
  const [amount, setAmount] = useState(1);

  const addAmount = () => {
    setAmount(amount + 1);
  };

  const removeAmount = () => {
    amount <= 0 ? setAmount(0) : setAmount(amount - 1);
  };

  const handleClick = () => {
    if (itemArray.some((item) => item.Name === Name)) setWarning(true);
    addItem({ Name: Name, Image: Image, Cost: Cost, Category: Category, Amount: amount });
  };

  return (
    <div className="amount-container">
      <div className="amount">
        <img src={plus} alt="Add" onClick={addAmount} />
        <input type="number" placeholder="1" disabled value={amount} />
        <img src={minus} alt="Minus" onClick={removeAmount} />
      </div>
      <button type="button" className="add-button" onClick={handleClick}>
        ADD
      </button>
    </div>
  );
};

export default Amount;