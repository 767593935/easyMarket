import {combineReducers} from 'redux'
import categoriesNav from './categoriesNav'
import goods from './goods'
import {brandDetails} from './brandDetails'

export default combineReducers({
  categoriesNav,
  goods,
  brandDetails
})