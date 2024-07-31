import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { requestHand } from "../api/cards";
import Cards from "../components/Cards"
import { CardsContext } from "../context/Cards";

export default function Hand() {
  const { setCards, type, setType } = useContext(CardsContext);
  const [submitting, setSubmitting] = useState(false)

  async function handleDeal() {
    setSubmitting(true);
    const response = await requestHand();
    if (response.error) {
      return
    };
    setCards(response.cards);
    setType(response.type.name);
    setSubmitting(false);
  };

  return (
    <div className="disable-cursor-line center">
      <h2 className={submitting ? "type" : "type " + type.toLowerCase()}>{!submitting && type && type + "!"}</h2>
      <Cards submitting={submitting} />
      <button className="deal-button" onClick={(e) => handleDeal()}>Deal</button>
      <p><Link to="/register">Register</Link> or <Link to="/login">Login</Link> to start saving your hands!</p>
    </div>
  );
};