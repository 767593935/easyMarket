import axios from "axios"
import qs from "qs"
axios.interceptors.request.use((config)=>{
  let data=config.data
  if(data && data instanceof Object){
      config.data=qs.stringify(data)
  }
  if(config.headers.needToken){
    const token=localStorage.getItem('token')
    console.log(token)
    config.headers={
     ' x-nideshop-token':token
    }
  }
  return config
  
})
axios.interceptors.response.use((response)=>{
  return response.data
},(error)=>{
  console.log(error)
  return new Promise(()=>{})
})
export default axios