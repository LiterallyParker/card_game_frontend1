export default function CardsList({ cards }) {
  return (
    <div className="cards-list">
    {
      cards.map(card => 
          <div key={card.id} className={`mini-card ${card.suit.toLowerCase()}`}>
            <p className={`mini-card-rank ${card.rank}`}>{card.rank}</p>
            <hr />
            <p className={`mini-card-suit ${card.suit.toLowerCase()}`}>{card.suit}</p>
          </div>
      )
    }
  </div>
  )
}