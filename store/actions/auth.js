import axios from "../../utils/axios";

export const login = (id) => {
  return {
    type: "LOGIN",
    payload: axios.get(`/user/${id}`),
  };
};
