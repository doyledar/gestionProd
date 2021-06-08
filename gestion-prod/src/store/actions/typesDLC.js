import {
    RETRIEVE_TYPES_DLC
  } from "./types";
  
  import TypeDLCDataService from "../../services/TypeDLCService"
  
   
  export const retrieveTypesDLC = () => async (dispatch) => {
    try {
      const res = await TypeDLCDataService.getAll();
  
      dispatch({
        type: RETRIEVE_TYPES_DLC,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
    
  