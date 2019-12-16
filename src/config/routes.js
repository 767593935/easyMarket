import CateLog from '@containers/CateLog/CateLog.jsx';
import Msite from '@containers/Msite/Msite.jsx';
import Cart from '@containers/Cart/Cart.jsx'
import ZhuanTi from '@containers/ZhuanTi/ZhuanTi.jsx'
import My from '@containers/My/My.jsx'
import Categorys from '@containers/Categorys/Categorys.jsx'
import BrandDetail from '@containers/BrandDetail/BrandDetail.jsx'
import Goods from '@containers/Goods/Goods.jsx'
import TopicDetail from '@containers/TopicDetail/TopicDetail.jsx';
import Comment from '@containers/Comment/Comment.jsx'
import TopicCommentWrite from '../containers/TopicCommentWrite/TopicCommentWrite.jsx'

const routes = [
  {
    path:'/msite',
    component:Msite,
    exact:true
  },
  {
    path:'/catelog',
    component:CateLog,
    exact:true
  },
  {
    path:'/zhuanti',
    component:ZhuanTi,
    exact:true
  },
  {
    path:'/cart',
    component:Cart,
    exact:true
  },
  {
    path:'/my',
    component:My,
    exact:true
  },
  {
    path:'/categorys/:id',
    component:Categorys,
    exact:true 
  },
  {
    path:'/branddetail/:id',
    component:BrandDetail,
    exact:true
  },
  {
    path:'/goods/:id',
    component:Goods,
    exact:true
  },{
    path:'/topicDetail/:id',
    component:TopicDetail,
    exact:true
  },
  {
    path:'/comment/:id',
    component:Comment,
    exact:true
  },
  {
    path:'/topicCommentWrite/:id',
    component:TopicCommentWrite,
    exact:true
  }
]

export default routes;