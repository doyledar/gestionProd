import {
   RETRIEVE_TYPES_ARTICLES
} from "../actions/types";
  
  const initialState = [];
  
  function typesArticlesReducer(typesArticles = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case RETRIEVE_TYPES_ARTICLES:
        return payload;
  
      default:
        return typesArticles;
    }
  };
  
  export default typesArticlesReducer;