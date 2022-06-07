import axios from "../../utils/axios";

export const getExperienceById = (id) => {
  return {
    type: "GET_EXPERIENCE_BY_ID",
    payload: axios.get(`workexperience?id=${id}`),
  };
};
export const createExperience = (data) => {
  return {
    type: "POST_EXPERIENCE",
    payload: axios.post(`workexperience`, data),
  };
};
export const deleteExperience = (id) => {
  return {
    type: "DELETE_EXPERIENCE",
    payload: axios.delete(`workexperience/${id}`),
  };
};
export const updateExperience = (id, form) => {
  return {
    type: "UPDATE_EXPERIENCE",
    payload: axios.patch(`workexperience/${id}`, form),
  };
};
