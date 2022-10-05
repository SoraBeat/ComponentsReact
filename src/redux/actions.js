export const ADD_FAV = "fav/add";
export const DELETE_FAV = "fav/delete";

export const addFav = (movie) => {
  return { type: ADD_FAV, movie };
};

export const deleteFav = (id) => {
  return { type: DELETE_FAV, id };
};

