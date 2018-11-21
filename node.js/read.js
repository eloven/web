const fs = require("fs");
const XLSX = require("xlsx");

fs.readFile("./data.json", "utf-8", function (err, data) {
    if (err) {
        console.log(err)
    } else {
        // console.log(data);
        res = getCity(JSON.parse(data));
        // console.log(res)
    }
});

function getCity(arr) {
    const keywordCity = [];
    let allCity = [];
    for (let i = 0; i < arr.length; i++) {
        const el = arr[i][0];
        const obj = {
            name: el.keyword,
            city: [],
            value: []
        };
        for (let j =0; j < el.city.length; j++) {
            const item = el.city[j];
            allCity.push(item.key);
            obj.city.push(item.key);
            obj.value.push(item.value)
        }
        keywordCity.push(obj)
    }
    const _all = new Set(allCity);
    allCity = Array.from(_all);
    // console.log(allCity.length);
    console.log(keywordCity);
    return {allCity, keywordCity}
}

function getExcel(obj) {
}