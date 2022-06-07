import axios from "../../utils/axios";

export const getPortfolioById = (id) => {
  return {
    type: "GET_PORTFOLIO_BY_ID",
    payload: axios.get(`portofolio/user/${id}`),
  };
};
export const createPortfolio = (data) => {
  return {
    type: "POST_PORTFOLIO",
    payload: axios.post(`portofolio`, data),
  };
};
export const deletePortfolio = (id) => {
  return {
    type: "DELETE_PORTFOLIO",
    payload: axios.delete(`portofolio/${id}`),
  };
};
export const updatePortfolio = (id, form) => {
  return {
    type: "UPDATE_PORTFOLIO",
    payload: axios.patch(`portofolio/${id}`, form),
  };
};
