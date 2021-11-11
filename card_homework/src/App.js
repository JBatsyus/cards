import React from 'react';

import './App.css';
// import './components/Card.scss';
import './components/Card';
import Card from './components/Card';

const cards = [
  {
    id: '1',
    header: 'Безлимитный 300',
    body: 'руб 300/мес',
    text: 'до 10 Мбит/сек',
  },
  {
    id: '2',
    header: 'Безлимитный 450',
    body: ' руб 450/мес',
    text: 'до 50 Мбит/сек',
  },
  {
    id: '3',
    header: 'Безлимитный 550',
    body: ' руб 550/мес',
    text: 'до 100 Мбит/сек',
  },
  {
    id: '4',
    header: 'Безлимитный 1000',
    body: ' руб 1000/мес',
    text: 'до 200 Мбит/сек',
  },
];

function App() {
  return (
    <div className="App">
      {cards.map(oneCard => (
        <Card
          key={oneCard.id}
          header={oneCard.header}
          body={oneCard.body}
          text={oneCard.text}
          footer={oneCard.footer}
        />
      ))}
    </div>
  );
}

export default App;
