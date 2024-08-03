import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Authorization";
import { requestLeaderboard, requestDeleteHand } from "../api/hands";
import CardsList from "./CardsList";
import { Link } from "react-router-dom";

export default function UserHands() {
  const [leaderboard, setLeaderboard] = useState([]);
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  async function fetchLeaderboard() {
    const { leaderboard } = await requestLeaderboard();
      setError("");
      if (!leaderboard) {
        setError("No leaderboard yet.");
        setLoading("");
        return;
    }
    setLoading("");
    setLeaderboard(leaderboard);
    };
  
  useEffect(() => {
    setLoading("Loading...")
    fetchLeaderboard();
  }, []);

  return (
    <div className="hands-list">
        {
            !user && <p className="center-text"><Link to="/login">Log in</Link> or <Link to="/register">register</Link> to start submitting to the leaderboard!</p>
        }
      {
        loading && <p className="center-text">{loading}</p>
      }
      {
        error && <p className="center-text">{error}</p>
      }
      {
        leaderboard.length > 0 && leaderboard.map(entry =>
          <div key={entry.id}>
            <div className="leaderboard list-hand">
                <div className="entry-head">
                <div className={`entry-placement ${entry.placement === 1 ? "first" : ""}${entry.placement === 2 ? "second" : ""}${entry.placement === 3 ? 'third' : ""}`}>
                    {entry.placement}
                </div>
                <div className={`entry-username ${user && entry.username === user.username ? "user-entry" : ""}`}>
                    {entry.username}
                </div>
                </div>
              <div className={`hand-type ${entry.hand.type.name.toLowerCase()}`}>
                {entry.hand.type.name}
              </div>
              <CardsList cards={entry.hand.cards} />
            </div>
            <div>
              <hr className="seperation center"/>
            </div>
          </div>
        )
      }
      {
        leaderboard.length >= 100 && <p className="center-text">Only showing top 100 hands! (for now)</p>
      }
    </div>
  )
}