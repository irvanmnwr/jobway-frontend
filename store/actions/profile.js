import axios from "../../utils/axios";

export const updateUser = (id, form) => {
  return {
    type: "UPDATE_USER",
    payload: axios.patch(`user/${id}`, form),
  };
};
