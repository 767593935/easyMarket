import {GET_CATEGORIES_SUCCESS} from '../action-types/category'
function goods(prevState={},action){
  switch (action.type){
    case GET_CATEGORIES_SUCCESS:
      return action.data
    default :
    return prevState  
  }
}

export default goods
