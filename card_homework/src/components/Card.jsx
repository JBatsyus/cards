import './Card.scss';

const Card = props => {
  const { header, body, text, isSelected } = props;
  const thisSelected = isSelected ? 'selected' : '';

  return (
    <div className="cardContainer">
      <div className={'card ' + thisSelected}>
        <div className="card-header"> {header}</div>
        <div className="card-body">{body}</div>
        <div clasName="card-text">{text}</div>
        <div className="card-footer">
          Объем включенного трафика не ограничен
        </div>
      </div>
    </div>
  );
};
export default Card;
