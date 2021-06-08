import {
    CREATE_ARTICLE,
    RETRIEVE_ARTICLES,
    UPDATE_ARTICLE,
    DELETE_ARTICLE,
    DELETE_ALL_ARTICLES
  } from "./types";
  
  import ArticleDataService from "../../services/ArticleService"
  
  export const createArticle = (article) => async (dispatch) => {
    try {
      const res = await ArticleDataService.create({ article });
      
      // le type définit comment le state doit changer
      // le payload décrit ce qui doit changer 
      dispatch({
        type: CREATE_ARTICLE,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const retrieveArticles = () => async (dispatch) => {
    try {
      const res = await ArticleDataService.getAll();
  
      dispatch({
        type: RETRIEVE_ARTICLES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const updateArticle = (ARTICLE, data) => async (dispatch) => {
    try {
      const res = await ArticleDataService.update(ARTICLE, data);
  
      dispatch({
        type: UPDATE_ARTICLE,
        payload: data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  export const deleteArticle = (ARTICLE) => async (dispatch) => {
    try {
      await ArticleDataService.delete(ARTICLE);
  
      dispatch({
        type: DELETE_ARTICLE,
        payload: { ARTICLE },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  export const deleteAllArticles = () => async (dispatch) => {
    try {
      const res = await ArticleDataService.deleteAll();
  
      dispatch({
        type: DELETE_ALL_ARTICLES,
        payload: res.data,
      });
  
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
  
  