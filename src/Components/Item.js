import { useEffect } from 'react';

const Item = (props) => {
  const { item, setItemArray, setTotalAmount } = props;

  useEffect(() => {
    setTotalAmount(prevAmount => (prevAmount + item.Amount * item.Cost));
  }, [item]) ;

  return (
    <div className="item">
      <img src={item.Image} alt={item.Name} className="item-image" />
      <div className="item-heading">
        <p className="item-name">{item.Name}</p>
        <p>{item.Category}</p>
      </div>
      <h3>{item.Cost}</h3>
      <h4>{item.Amount}</h4>
      <h2>{item.Amount * item.Cost}</h2>
    </div>
  );
};

export default Item;
