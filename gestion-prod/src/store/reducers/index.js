import { combineReducers } from "redux";
import articles from "./articles";
import typesRemplacements from './typesRemplacements'
import typesArticles from './typesArticles'
import typesAnimales from './typesAnimales'

export default combineReducers({
  articles,
  typesRemplacements,
  typesArticles,
  typesAnimales
});