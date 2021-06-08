import {
   RETRIEVE_TYPES_REMPLACEMENTS
} from "../actions/types";
  
  const initialState = [];
  
  function typesRemplacementsReducer(typesRemplacements = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case RETRIEVE_TYPES_REMPLACEMENTS:
        return payload;
  
      default:
        return typesRemplacements;
    }
  };
  
  export default typesRemplacementsReducer;