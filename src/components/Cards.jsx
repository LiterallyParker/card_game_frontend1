import { useContext } from "react"
import { CardsContext } from "../context/Cards"
import Card from "./Card";

export default function Cards({ submitting }) {
  
  const { cards } = useContext(CardsContext);

  return (
    <div className="middle">
      {
        cards && cards.map(card => <Card key={card.id} submitting={submitting} card={card}/>)
      }
    </div>
  );
};