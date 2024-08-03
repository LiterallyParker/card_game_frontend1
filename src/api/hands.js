import { ENDPOINT } from ".";

export async function requestUserHand(token) {
  try {
    const response = await fetch(`${ENDPOINT}/hands`, {
      headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    })
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  };
};

export async function requestLeaderboard() {
  try {
    const response = await fetch(`${ENDPOINT}/leaderboard`, {
      headers: {
        "Content-Type":"application/json"
      }
    })
    const result = await response.json();
    return result;

  } catch (error) {
    console.error(error);
  }
}

export async function requestNewUserHand(token) {
  try {
    const response = await fetch(`${ENDPOINT}/hands`, {
      method: "PUT",
      headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    })
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  };
};

export async function requestUserHands(userId) {
  try {
    const response = await fetch(`${ENDPOINT}/hands/${userId}`, {
      headers: {
        "Content-Type":"application/json"
      }
    });
    const result = await response.json();
    return result;

  } catch (error) {
    console.error(error);
  }
}

export async function requestDeleteHand(id, token) {
  try {
    const response = await fetch(`${ENDPOINT}/hands/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export async function requestSaveHand(token) {
  try {
    const response = await fetch(`${ENDPOINT}/hands`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    });
    const result = await response.json();
    return result;

  } catch (error) {
    console.error(error);
  }
} 