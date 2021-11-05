import {axiosWithAuth} from "../utils/axiosWithAuth";


const articleServices = (setArticles)=> {
  axiosWithAuth()
  .get("/articles")
  .then((res) => {
    setArticles(res.data);
  })
  .catch((err) => console.log(err))
}
  
  

export default articleServices;

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.