import {
    RETRIEVE_TYPES_ANIMALES
  } from "./types";
  
  import TypeAnimaleDataService from "../../services/TypeAnimaleService"
  
   
  export const retrieveTypesAnimales = () => async (dispatch) => {
    try {
      const res = await TypeAnimaleDataService.getAll();
  
      dispatch({
        type: RETRIEVE_TYPES_ANIMALES,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
    
  