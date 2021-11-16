import React, { useState } from "react";
import "./Card.scss";

const Card = props => {
    const [pressed, setPressed] = useState(false);

    const { id, header, text, sum } = props;

    const blueCard = id === "1" ? "colorBlue" : "";
    const greenCard = id === "2" ? "colorGreen" : "";
    const redCard = id === "3" ? "colorRed" : "";
    const blackCard = id === "4" ? "colorBlack" : "";

    const thisSelected = pressed ? " selected" : "";

    const blueBack = id === "1" ? " colorHeaderBlue" : "";
    const greenBack = id === "2" ? " colorHeaderGreen" : "";
    const redBack = id === "3" ? " colorHeaderRed" : "";
    const blackBack = id === "4" ? " colorHeaderBlack" : "";

    const handleChange = () => {
        setPressed(!pressed);
    };

    return (
        <div className={"cardContainer" + thisSelected} onClick={handleChange}>
            <div
                className={
                    "card " +
                    blueCard +
                    greenCard +
                    redCard +
                    // thisSelected +
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
