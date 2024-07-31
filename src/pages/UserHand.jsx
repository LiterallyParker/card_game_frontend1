import { useContext, useState } from "react"
import { requestNewUserHand, requestSaveHand } from "../api/hands"
import Cards from "../components/Cards"
import { CardsContext } from "../context/Cards"
import { AuthContext } from "../context/Authorization";

export default function UserHand() {
  const { setCards, type, setType } = useContext(CardsContext);
  const { token } = useContext(AuthContext);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleDeal() {
    setSubmitting(true);
    const { hand } = await requestNewUserHand(token);
    if (!hand) {
      return;
    }
    setCards(hand.cards);
    setType(hand.type.name);
    setSubmitting(false);
    setError("");
  }

  async function handleSaveHand() {
    setSubmitting(true);
    const response = await requestSaveHand(token);
    if (response.error) {
      setError(response.message);
      setSubmitting(false);
      return;
    }
    setSubmitting(false);
    setError("");
  }

  return (
    <div className="disable-cursor-line center cards">
      <h2 className={submitting ? "type" : "type " + type.toLowerCase()}>{!submitting && type && type + "!"}</h2>
      <Cards submitting={submitting} />
      <div className="buttons">
      <button className="deal-button" disabled={submitting} onClick={(e) => handleDeal()}>Deal</button>
      <button className="save-button" disabled={submitting} onClick={(e) => handleSaveHand()}>Save Hand</button>
      </div>
      {
        error && <p className="save-error">{error}</p>
      }
      </div>
  )
}