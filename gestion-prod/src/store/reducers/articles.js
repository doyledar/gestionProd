import {
    CREATE_ARTICLE,
    RETRIEVE_ARTICLES,
    UPDATE_ARTICLE,
    DELETE_ARTICLE,
    DELETE_ALL_ARTICLES,
  } from "../actions/types";
  
  const initialState = [];
  
  function articleReducer(articles = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_ARTICLE:
        return [...articles, payload];
  
      case RETRIEVE_ARTICLES:
        return payload;
  
    /* // voir pour le if (ARTICLE à la place de id ???)
      case UPDATE_ARTICLE:
        return articles.map((article) => {
          if (article.id === payload.id) {
            return {
              ...article,
              ...payload,
            };
          } else {
            return article;
          }
        });
  
    // idem (ARTICLE à la place de id ????)
      case DELETE_ARTICLE:
        return articles.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_ARTICLES:
        return [];
   */
      default:
        return articles;
    }
  };
  
  export default articleReducer;