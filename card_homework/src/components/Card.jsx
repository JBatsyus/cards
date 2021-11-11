import './Card.scss';

const Card = props => {
  const {
    isSelected,
    header,
    text,
    rubles,
    sum,
    month,
    colorBlueCard,
    colorGreenCard,
    colorRedCard,
    colorBlackCard,
  } = props;

  const thisSelected = isSelected ? 'selected' : '';
  const blueCard = colorBlueCard ? 'colorBlue' : '';
  const greenCard = colorGreenCard ? 'colorGreen' : '';
  const redCard = colorRedCard ? 'colorRed' : '';
  const blackCard = colorBlackCard ? 'colorBlack' : '';

  return (
    <div className="cardContainer">
      <div className={'card ' + thisSelected}>
        <div className="card-header"> {header}</div>
        <div
          className={'card-body' + blueCard + greenCard + redCard + blackCard}
        >
          <div className="card-rubles">{rubles}</div>
          <div className="card-sum">{sum}</div>
          <div className="card-month ">{month}</div>
        </div>
        <div clasName="card-text">{text}</div>
        <div className="card-footer">
          Объем включенного трафика не ограничен
        </div>
      </div>
    </div>
  );
};
export default Card;
