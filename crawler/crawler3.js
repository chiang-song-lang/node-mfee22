const axios = require("axios");
const {readFile} = require('fs/promises');

(async () => {
    try {
        let stockNo = await readFile('stock.txt', 'utf-8');
        let queryDate = "20220110";
        let response = await axios.get(
            "https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
                params: {
                    response: "json",
                    date: queryDate,
                    stockNo,
                },
            },
        );
        console.log(response.data);
    } catch (error) {
        console.log(error)
    }
})();