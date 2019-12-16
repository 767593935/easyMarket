//引入types
import {GET_BRANDDETAILSUCCESS} from '../action-types/category'

function brandDetails(prevState={},action) { 
  switch (action.type) {
    case GET_BRANDDETAILSUCCESS:
      return action.data
    default:
      return prevState 
  }
 }

 //--------------后台数据错误---已放弃
//  function brandGoods(prevState=[],action) { 
//   switch (action.type) {
//     case GET_BRANDGOODSSUCCESS:
//       return action.data
//     default:
//       return prevState
//   }
// }

 export  {brandDetails}