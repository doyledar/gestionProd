import articleReducer from './articles'
import typesAnimalesReducer from './typesAnimales'
import typesArticlesReducer from './typesArticles'
import typesDLCReducer from './typesDLC'
import typesRemplacementsReducer from './typesRemplacements'
import { combineReducers } from 'redux'

// dans le state, on aura les propriétés auth et article qui correspondent aux reducers authReducer et articleReducer
// après avoir importé rootReducer dans index.js
const rootReducer = combineReducers({
    articles: articleReducer,
    typesAnimales: typesAnimalesReducer,
    typesArticles: typesArticlesReducer,
    typesDLC: typesDLCReducer,
    typesRemplacements: typesRemplacementsReducer
})

export default rootReducer



