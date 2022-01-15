const axios = require("axios");
const {
    readFile
} = require("fs/promise");

(async () => {
    try {
        let stockNo = await readFile('stock.txt', 'utf-8');
        let queryDate = "20220115";
        let response = await axios.get(
            "https://www.twse.com.tw/exchangeReport/STOCK_DAY", {
                params: {
                    response: "json",
                    data: queryDate,
                    stockNo,
                },
            },
        );
        console.log(response.date);
    } catch (error) {
        console.log(error)
    }
})();