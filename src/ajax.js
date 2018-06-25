/* global fetch:false */
 
const apiHost = "http://127.0.0.1:8080/v1/potteries.json"

export default {
    async fetchPotteryLists(){
        try {
         const response = await fetch(apiHost);
         const responseJson = await response.json();
         console.log(responseJson)
         return responseJson;
        
    } catch (error) {
      console.error(error);
     }
    },
    
    async fetchPotteryDetail(potteryId){
        try {
         const response = await fetch(apiHost + '/' + potteryId);
         const responseJson = await response.json();
        return responseJson;
    } catch (error) {
      console.error(error);
     }
    }
    
    
    
}
