//引入types
import {GET_CATEGORY_NAVDATA_SUCCESS} from '../action-types/category'

function categoriesNav(prevState={},action) { 
  switch (action.type){
    case GET_CATEGORY_NAVDATA_SUCCESS:
      return action.data
    default :
      return prevState  
  }
 }
 
 export default categoriesNav