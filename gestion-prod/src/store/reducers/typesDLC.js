import {
   RETRIEVE_TYPES_DLC
} from "../actions/types";
  
  const initialState = [];
  
  function typesDLCReducer(typesDLC = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case RETRIEVE_TYPES_DLC:
        return payload;
  
      default:
        return typesDLC;
    }
  };
  
  export default typesDLCReducer;