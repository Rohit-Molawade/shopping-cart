import plus from '../../images/plus.png';
import minus from '../../images/minus.png';
import './Amount.css';
import { useState } from 'react';

const Amount = (props) => {
  const { increaseAmount, decreaseAmount, itemAmount } = props;
  const [amount, setAmount] = useState(itemAmount);

  const addAmount = () => {
    setAmount(amount + 1);
    increaseAmount();
  };

  const removeAmount = () => {
    if (amount <= 0) {
      setAmount(0);
    } else {
      setAmount(amount - 1);
      decreaseAmount();
    }
  };

  return (
    <div className="amount">
      <img src={plus} alt="Add" onClick={addAmount} />
      <h2 className="amount-display">{amount}</h2>
      <img src={minus} alt="Minus" onClick={removeAmount} />
    </div>
  );
};

export default Amount;
