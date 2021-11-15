import "./Card.scss";

const Card = props => {
    const {
        isSelected,
        header,
        text,
        sum,
        colorBlueCard,
        colorGreenCard,
        colorRedCard,
        colorBlackCard,
        blueВackgroundHeader,
        greenВackgroundHeader,
        redВackgroundHeader,
        blackВackgroundHeader,
    } = props;

    const blueCard = colorBlueCard ? "colorBlue" : "";
    const greenCard = colorGreenCard ? "colorGreen" : "";
    const redCard = colorRedCard ? "colorRed" : "";
    const blackCard = colorBlackCard ? "colorBlack" : "";
    const thisSelected = isSelected ? " selected" : "";

    const blueBack = blueВackgroundHeader ? " colorHeaderBlue" : "";
    const greenBack = greenВackgroundHeader ? " colorHeaderGreen" : "";
    const redBack = redВackgroundHeader ? " colorHeaderRed" : "";
    const blackBack = blackВackgroundHeader ? " colorHeaderBlack" : "";

    return (
        <div className="cardContainer">
            <div
                className={
                    "card " +
                    blueCard +
                    greenCard +
                    redCard +
                    thisSelected +
                    blackCard
                }
            >
                <div
                    className={
                        "card-header" +
                        blueBack +
                        greenBack +
                        redBack +
                        blackBack
                    }
                >
                    {header}{" "}
                </div>
                <div className="card-body">
                    <div className="card-rubles">руб</div>
                    <div className="card-sum">{sum}</div>
                    <div className="card-month ">/мес</div>
                </div>
                <div className="card-text">{text}</div>
                <div className="card-footer">
                    Объем включенного трафика не ограничен
                </div>
            </div>
        </div>
    );
};
export default Card;
