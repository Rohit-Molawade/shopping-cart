import './Cart.css';

const Cart = () => {
  return (
    <div className="Cart">
      <div className="top">
        <p>YOUR SHOPPING CART</p>
      </div>
      <div className="middle"></div>
      <div className="bottom">
        <div className="amount-container">
          <p className="total-text">TOTAL</p>
          <p className="total-amount">299</p>
        </div>
        <div className="buttons-container">
          <button type="button">CHECKOUT</button>
          <button type="button">SHOP MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
