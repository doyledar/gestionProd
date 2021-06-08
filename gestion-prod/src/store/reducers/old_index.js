import { bindActionCreators } from 'redux'
import { FETCH_ARTICLE_SUCCESS, FETCH_ARTICLE_PENDING, FETCH_ARTICLE_FAILURE  } from '../old_actions'
import initialState from '../old_initialState'

//console.log(initialState)


function rootReducer(state = initialState, action) {
    switch(action.type){
        
        case FETCH_ARTICLE_SUCCESS:
            return {
                ...state,
                articles: action.payload.articles,
                isFetching: false
                
            }
        case FETCH_ARTICLE_PENDING:
            return {
                ...state,
                isFetching: true
                
        }
        
        default:
            return state 
    
    }
    
}

export default rootReducer
