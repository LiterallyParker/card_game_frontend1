import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Authorization";
import { getUserHands, requestDeleteHand } from "../api/hands";
import CardsList from "./CardsList";

export default function UserHands() {
  const [userHands, setUserHands] = useState([]);
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [deleting, setDeleting] = useState(false);

  async function fetchUserHands() {
    
    if (user) {
      const hands = await getUserHands(user.id);
      setError("");
      if (hands.error) {
        setError(hands.message);
        setLoading("");
      }
      setLoading("");
      setUserHands(hands);
    };
  };
  
  useEffect(() => {
    setLoading("Loading...")
    fetchUserHands();
  }, [user]);

  async function handleDeleteHand(id) {
    setDeleting(true);
    await requestDeleteHand(id, token);
    await fetchUserHands();
    setDeleting(false);
  }

  return (
    <div className="hands-list">
      {
        loading && <p className="hands-empty">{loading}</p>
      }
      {
        error && <p className="hands-empty">{error}</p>
      }
      {
        userHands.length > 0 && userHands.map(hand =>
          <div key={hand.id}>
            <div className="list-hand">
              <div className={`hand-type ${hand.type.name.toLowerCase()}`}>
                {hand.type.name}
              </div>
              <CardsList cards={hand.cards} />
              <button className="delete-hand" disabled={deleting} onClick={(e) => handleDeleteHand(hand.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
            <div>
              <hr className="seperation center"/>
            </div>
          </div>
        )
      }
    </div>
  )
}