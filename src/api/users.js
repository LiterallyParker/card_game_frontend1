import { ENDPOINT } from ".";

export async function requestUser({ username, password }) {

  try {
    const response = await fetch(`${ENDPOINT}/users/login`, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ username, password })
    });
    const result = await response.json();
    return result;

  } catch (error) {
    console.error(error);

  };
};

export async function requestNewUser({ username, firstname, lastname, email, password, confirmedPassword }) {

  try {
    const response = await fetch(`${ENDPOINT}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({ username, firstname, lastname, email, password, confirmedPassword })
    });
    const result = await response.json();
    return result;

  } catch (error) {
    console.error(error);

  }
}

export async function requestUserInfo(token) {
  try {
    const response = await fetch(`${ENDPOINT}/users/account`, {
      headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  };
};

export async function deleteUser(token) {
  try {
    const response = await fetch(`${ENDPOINT}/users/account`, {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }
    })
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}