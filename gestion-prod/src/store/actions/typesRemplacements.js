import {
    RETRIEVE_TYPES_REMPLACEMENTS
  } from "./types";
  
  import TypeRemplacementDataService from "../../services/TypeRemplacementService"
  
   
  export const retrieveTypesRemplacements = () => async (dispatch) => {
    try {
      const res = await TypeRemplacementDataService.getAll();
  
      dispatch({
        type: RETRIEVE_TYPES_REMPLACEMENTS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
    
  