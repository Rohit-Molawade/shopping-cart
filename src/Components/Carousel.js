import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [imageArray, setimageArray] = useState([]);

  const getArray = async () => {
    try {
      const response = await fetch('https://valorant-api.com/v1/weapons/skins');
      const data = await response.json();
      setimageArray(data.data.slice(0, 5));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getArray();
  }, []);

  return (
    <div className="Carousel-container">
    </div>
  );
};

export default Carousel;
