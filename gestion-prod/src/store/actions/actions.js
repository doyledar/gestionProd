export const RETRIEVE_ARTICLES = 'RETRIEVE_ARTICLES'
export const RETRIEVE_TYPE_ARTICLES ='RETRIEVE_TYPE_ARTICLES'

import ArticleDataService from '../../services/ArticleService' 
import TypeArticleDataService from "../../services/TypeArticleService"
  
   
export const retrieveArticles = () => async (dispatch) => {
  try {
    const res = await ArticleDataService.getAll();

    dispatch({
      type: RETRIEVE_ARTICLES,
      typesArticles: res.data
    })
  } catch(err){
    console.log(err)
  }
}


  export const retrieveTypesArticles = () => async (dispatch) => {
    try {
      const res = await TypeArticleDataService.getAll();
  
      dispatch({
        type: RETRIEVE_TYPES_ARTICLES,
        typesArticles: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
    
  