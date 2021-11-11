import React from 'react';
import './Card.scss';

function Card(props) {
  return (
    <div className="cardContainer">
      <div className={'card'  + (props.isSelected ? 'selected' : '')} >
        <div className="card-header"> {props.header}</div>
        <div className="card-body">{props.body}</div>
        <p clasNames="card-text">{props.text}</p>
        <div className="card-footer">
          Объем включенного трафика не ограничен
        </div>
      </div>
    </div>
  );
}
export default Card;
