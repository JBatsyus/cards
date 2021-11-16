import "./App.css";
import Card from "./components/Card";
import { cards } from "./components/Cards";

function App() {
    return (
        <div className="App">
            {cards.map(oneCard => (
                <Card
                    key={oneCard.id}
                    header={oneCard.header}
                    blueВackgroundHeader={oneCard.blueВackgroundHeader}
                    greenВackgroundHeader={oneCard.greenВackgroundHeader}
                    redВackgroundHeader={oneCard.redВackgroundHeader}
                    blackВackgroundHeader={oneCard.blackВackgroundHeader}
                    rubles={oneCard.rubles}
                    sum={oneCard.sum}
                    month={oneCard.month}
                    text={oneCard.text}
                    footer={oneCard.footer}
                    pressed={oneCard.pressed}
                    colorBlueCard={oneCard.colorBlueCard}
                    colorGreenCard={oneCard.colorGreenCard}
                    colorRedCard={oneCard.colorRedCard}
                    colorBlackCard={oneCard.colorBlackCard}
                />
            ))}
        </div>
    );
}

export default App;
