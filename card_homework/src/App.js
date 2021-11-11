import './App.css';
import Card from './components/Card';

const cards = [
  {
    id: '1',
    header: 'Безлимитный 300',
    sum: '300',
    text: 'до 10 Мбит/сек',
    colorBlueCard: true,
  },
  {
    id: '2',
    header: 'Безлимитный 450',
    sum: '450',
    text: 'до 50 Мбит/сек',
    colorGreenCard: true,
  },
  {
    id: '3',
    header: 'Безлимитный 550',
    sum: '550',
    text: 'до 100 Мбит/сек',
    isSelected: true,
    colorRedCard: true,
  },
  {
    id: '4',
    header: 'Безлимитный 1000',
    sum: '1000',
    text: 'до 200 Мбит/сек',
    colorBlackCard: true,
  },
];

function App() {
  return (
    <div className="App">
      {cards.map(oneCard => (
        <Card
          key={oneCard.id}
          header={oneCard.header}
          rubles={oneCard.rubles}
          sum={oneCard.sum}
          month={oneCard.month}
          text={oneCard.text}
          footer={oneCard.footer}
          isSelected={oneCard.isSelected}
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
