/* global fetch:false */

const apiHost = "https://bakesaleforgood.com/api/deals"

export default {
    async fetchPotteryLists(){
        try {
         let response = await fetch(apiHost);
         let responseJson = await response.json();
        return responseJson;
    } catch (error) {
      console.error(error);
     }
    }
    
}