import React from 'react';
import './serviceCard.css'

const serviceCard = ({item}) => {
    const {imgUrl, title, desc}=item;
  return (
    <div>
      <div className="service__item">
        <div className="service__img">
            <img src={imgUrl} alt="" />
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default serviceCard;
