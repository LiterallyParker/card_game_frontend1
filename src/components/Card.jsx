export default function Card({ card, submitting }) {

  return (
    <div className={`center card ${card.suit.toLowerCase() || ""}`}>
      <p className="rank disable-cursor-line">{submitting ? "" : card.rank}</p>
      <div className={submitting ? "disable-cursor-line invisible" : "disable-cursor-line"}>
      <img className={`${card.suit.toLowerCase() || ""} card-image`} src={submitting ? "" : card.imageUrl}/>
      </div>
    </div>
  )
}