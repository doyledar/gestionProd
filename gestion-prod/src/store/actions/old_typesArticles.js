import {
    RETRIEVE_TYPES_ARTICLES
  } from "./types";
  
  import TypeArticleDataService from "../../services/TypeArticleService"
  
   
  export const retrieveTypesArticles = () => async (dispatch) => {
    try {
      const res = await TypeArticleDataService.getAll();
  
      dispatch({
        type: RETRIEVE_TYPES_ARTICLES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
    
  