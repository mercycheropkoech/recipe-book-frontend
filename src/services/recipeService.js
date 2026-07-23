
import API from "./api";

export const getRecipes = async () => {
  const response = await API.get("recipes/");
  return response.data;
};

export const getRecipe = async (id) => {
  const response = await API.get(`recipes/${id}/`);
  return response.data;
};

export const createRecipe = async (recipe) => {
  const response = await API.post("recipes/", recipe);
  return response.data;
};

export const updateRecipe = async (id, recipe) => {
  const response = await API.put(`recipes/${id}/`, recipe);
  return response.data;
};

export const deleteRecipe = async (id) => {
  await API.delete(`recipes/${id}/`);
};