import './Card.css';
import plus from '../../images/plus.png';
import minus from '../../images/minus.png';

const Card = (props) => {
  const item = props;
  const { Name, Image, Cost, Category } = props;
  console.log(item.Name, Name, Image, Cost, Category);
  return (
    <div className="card">
      <img src={Image} alt={Name} id="displayIcon" />
      <div className="info">
        <span>{Name}</span>
        <div className="amount">
          <img src={plus} alt="Add" />
          <input type="number" placeholder="1" disabled />
          <img src={minus} alt="Minus" />
        </div>
        <button type="button" className="add-button">
          ADD
        </button>
      </div>
    </div>
  );
};

export default Card;
