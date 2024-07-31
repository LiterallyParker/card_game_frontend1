import { createContext, useContext, useEffect, useState } from "react";
import { defaultHand } from "./defaultHand";
import { AuthContext } from "./Authorization";
import { requestUserHand } from "../api/hands";

export const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
  const { token } = useContext(AuthContext);
  const [cards, setCards] = useState(defaultHand);
  const [type, setType] = useState("");


  useEffect(() => {
    if (token) {
      const setUserCards = async () => {
        const { hand } = await requestUserHand(token);
        const { cards, type } = await hand;
        setCards(cards);
        setType(type.name);
      };
      setUserCards();
    };
  }, [token]);

  return (
    <CardsContext.Provider value={{ cards, setCards, type, setType }}>
      {children}
    </CardsContext.Provider>
  );
};