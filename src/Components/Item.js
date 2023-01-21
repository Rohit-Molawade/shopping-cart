import { useEffect } from 'react';
import Amount from './Shop-Components/Amount';

const Item = (props) => {
  const { item, setItemArray, setTotalAmount, itemArray } = props;

  useEffect(() => {
    generateSubTotal();
  }, [item.Amount]);

  const generateSubTotal = () => {
    setItemArray(
      itemArray.map((item_current) => {
        if (item_current.Name === item.Name) {
          item_current.SubTotal = item.Amount * item.Cost;
        }
        return item_current;
      })
    );
  };

  const increaseAmount = () => {
    setItemArray(
      itemArray.map((item_current) => {
        if (item_current.Name === item.Name) {
          item_current.Amount = item_current.Amount + 1;
        }
        return item_current;
      })
    );
  };

  const decreaseAmount = () => {
    setItemArray(
      itemArray.map((item_current) => {
        if (item_current.Name === item.Name) {
          item_current.Amount = item_current.Amount - 1;
        }
        return item_current;
      })
    );
  };

  return (
    <div className="item">
      <img src={item.Image} alt={item.Name} className="item-image" />
      <div className="item-heading">
        <p className="item-name">{item.Name}</p>
        <p>{item.Category}</p>
      </div>
      <h3>{item.Cost}</h3>
      <Amount increaseAmount={increaseAmount} decreaseAmount={decreaseAmount} itemAmount={item.Amount} />
      <h2>{item.SubTotal}</h2>
    </div>
  );
};

export default Item;
