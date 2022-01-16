import React, { useContext, useEffect, useReducer } from "react";

import {
  HANDLE_PAGE,
  HANDLE_SEARCH,
  REMOVE_STORY,
  SET_LOADING,
  STOP_LOADING,
  SET_DATA,
} from "./actions";

import reducer from "./reducer";
const API_KEY = "a2a3f8006cc14f47906ec3a940c9a6d6";

const API_ENDPOINT = `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}&tags=vegan`;

const initialState = {
  isLoading: true,
  recipes: [],
  nbRecipes: "",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUrl = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.recipes);
      dispatch({
        type: SET_DATA,
        payload: {
          recipes: data.recipes,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const startLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const stopLoading = () => {
    dispatch({ type: STOP_LOADING });
  };

  useEffect(() => {
    fetchUrl(API_ENDPOINT);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, startLoading, stopLoading }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
