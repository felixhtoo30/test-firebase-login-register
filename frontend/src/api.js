const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;

export const saveUserData = async (email, firebase_uid) => {
  console.log(email, firebase_uid);
  return await fetch(`${BACKEND_API_URL}/user/register`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      firebase_uid: firebase_uid
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(err => {
      console.log('Error Details of saving User Data: ', err);
    });
};

export const getUserData = async (email, firebase_uid) => {
  return await fetch(`${BACKEND_API_URL}/user`, {
    method: "GET",
    body: JSON.stringify({
      email: email,
      firebase_uid: firebase_uid
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch(err => {
      console.log('Error Details: ', err);
    });
};
