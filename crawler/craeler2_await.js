const axios = require("axios");

(async () => {
  try {
    let stockNo = 2330;
    let queryDate = "20220115";



    let response = await axios.get(
      "https://www.twse.com.tw/exchangeReport/STOCK_DAY",
      {
        params: {
          response: "json",
          data: queryDate,
          stockNo,
        },
      },
    );
    console.log(response.date);
  }catch(e){
    console.error(e)
  }
})();