import "./App.css";
import Card from "./components/Card";
import { cards } from "./components/Cards";

function App() {
    return (
        <div className="App">
            {cards.map(oneCard => (
                <Card
                    key={oneCard.id}
                    id={oneCard.id}
                    header={oneCard.header}
                    rubles={oneCard.rubles}
                    sum={oneCard.sum}
                    month={oneCard.month}
                    text={oneCard.text}
                    footer={oneCard.footer}
                    pressed={oneCard.pressed}
                />
            ))}
        </div>
    );
}

export default App;
