import axios from "axios"

const API = axios.create({baseURL:"https://testmern.herokuapp.com/"})

API.interceptors.request.use((req) => {
    const userInfo = localStorage.getItem("user_info");
  
    if (userInfo) {
      const parsedUserInfo = JSON.parse(userInfo);
      req.headers.Authorization = `Bearer ${parsedUserInfo.token}`;
    }
  
    return req;
  });
  

export const signIn = (data) => API.post("/users/signin", data)
export const signInGoogle = (accessToken) => API.post("/users/signin", {
    googleAccessToken: accessToken
})

export const signUp = (data) => API.post("/users/signup", data)
export const signUpGoogle = (accessToken) => API.post("/users/signup", {
    googleAccessToken: accessToken
})

export const nasaUrl = "https://testmern.herokuapp.com/nasa"