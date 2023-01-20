import { useEffect, useState } from 'react';
import './Shop.css';
import Card from './Shop-Components/Card';

const Shop = (prop) => {
  const { itemArray, addItem, setItemArray } = prop;
  const [imageArray, setimageArray] = useState([]);

  function processResponse(data) {
    const processed_data = data.map((item) => {
      return {
        Name: item.displayName,
        Image: item.displayIcon,
        Cost: item.shopData.cost,
        Category: item.shopData.categoryText,
      };
    });

    return processed_data;
  }

  const getArray = async () => {
    try {
      const response = await fetch('https://valorant-api.com/v1/weapons/');
      let data = await response.json();
      data = processResponse(data.data.slice(0, 17));
      setimageArray(...imageArray, data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArray();
  }, []);

  return (
    <div className="Shop">
      <div className="card-container">
        {imageArray.map((item, index) => {
          return (
            <Card
              Name={item.Name}
              Image={item.Image}
              Cost={item.Cost}
              Category={item.Category}
              addItem={addItem}
              itemArray={itemArray}
              setItemArray={setItemArray}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
