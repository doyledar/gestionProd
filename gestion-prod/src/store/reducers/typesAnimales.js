import {
   RETRIEVE_TYPES_ANIMALES
} from "../actions/types";
  
  const initialState = [];
  
  function typesAnimalesReducer(typesAnimales = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case RETRIEVE_TYPES_ANIMALES:
        return payload;
  
      default:
        return typesAnimales;
    }
  };
  
  export default typesAnimalesReducer;