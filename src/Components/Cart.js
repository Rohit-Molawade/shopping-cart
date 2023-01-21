import { useEffect, useState } from 'react';
import './Cart.css';
import Item from './Item';
import { Link } from 'react-router-dom';

const Cart = (props) => {
  const { itemArray, setItemArray } = props;
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    generateTotal();
  }, [itemArray]);

  const generateTotal = () => {
    setTotalAmount(0);
    itemArray.forEach((item) => {
      setTotalAmount((prevAmount) => prevAmount + item.SubTotal);
      console.log(item.SubTotal + '  ' + totalAmount);
    });
  };

  return (
    <>
      {itemArray.length !== 0 ? (
        <div className="Cart">
          <div className="top">
            <p>YOUR SHOPPING CART</p>
          </div>
          <div className="middle">
            <div className="heading">
              <h3>ITEM</h3>
              <h3>INFO</h3>
              <h3>COST</h3>
              <h3>AMOUNT</h3>
              <h3>SUBTOTAL</h3>
            </div>
            <div className="item-container">
              {itemArray.map((item) => {
                return <Item key={item.Name} item={item} setItemArray={setItemArray} setTotalAmount={setTotalAmount} itemArray={itemArray} />;
              })}
            </div>
          </div>
          <div className="bottom">
            <div className="total-amount-container">
              <p className="total-text">TOTAL</p>
              <p className="total-amount">{totalAmount}</p>
            </div>
            <div className="buttons-container">
              <Link to={'/'}>
                <button type="button">CHECKOUT</button>
              </Link>
              <Link to={'/shop'}>
                <button type="button">SHOP MORE</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h1>Your shopping cart is empty</h1>
          <Link to={'/shop'}>
            <button type="button">SHOP NOW</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
