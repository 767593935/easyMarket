import Good from "../pages/Goods/Good"
import Comments from "../components/comments/Comments"
const routes =[
  {
    path:'/goods/:id',
    component:Good
  },
  {
    path:"/comments/:id",
    component:Comments
  }
]
export default routes
