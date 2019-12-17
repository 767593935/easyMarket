// 引入创建store方法 applyMiddleware用于包裹thunk
import {createStore,applyMiddleware} from 'redux'
// 引入reducers ,createStore方法创建store需要reducers
import reducers from './reducers'
// 引入thunk action异步方法
import thunk from 'redux-thunk'
// 引入插件包
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))
