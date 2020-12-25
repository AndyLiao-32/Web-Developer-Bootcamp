const request = require("request");

const listTreeCo = (treename) => {
    request({
        url: "https://map.ntu.edu.tw/ntutree/permitAll/listTreeCoTreeName",
        method: "POST",
        form: { "co":"","searchKeyword": treename }
    }, function(error, response, body) {
        if (error || !body) {
            return;
        }

        const data = JSON.parse(body);
        // for (i = 0; i < data.length; i++) {
        //     console.log(data[i][1])
        // }
        console.log(data[0][1])
        // return data[0][1] // 回傳值顯示undefined
    })
};

// const treename = "克利巴椰子"
// listTreeCo(treename)

module.exports = { listTreeCo };