import { ENDPOINT } from ".";

export async function requestHand() {
  try {
    const response = await fetch(`${ENDPOINT}/cards/hand`, {
      headers: {
        "Content-Type":"application/json"
      }
    });
    const json = await response.json();
    return json;

  } catch (error) {
    console.error(error);
  };
};