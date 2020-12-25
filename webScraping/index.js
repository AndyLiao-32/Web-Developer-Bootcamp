const request = require("request");
// const cheerio = require("cheerio");
// const fs = require("fs");

const treeDetailData = (co) => {
  request({
    url: "https://map.ntu.edu.tw/ntutree/permitAll/treeRegistration/get",
    method: "POST",
    form: { "treeId":"18704", "co":co }
  }, function (error, response, body) {
    if (error || !body) {
      return;
    }
    const data = JSON.parse(body);
    console.log("id: " + data.treeDb.id);
    console.log("中文名: " + data.treeDb.chineseTreeName);
    console.log("英文名: " + data.treeDb.englishTreeName);
    console.log("學名: " + data.treeDb.scientificTreeName);
    console.log("生長源: " + data.treeDb.growthFrom);
    console.log("樹高: " + data.tree.treeHeight + " 公尺");
    console.log("樹冠幅: " + data.treeRegistration.treeCrownHeight + " 平方公尺");
    console.log("Tree Registration (co): " + data.tree.co);
    console.log("座標: " + "(" + data.tree.twd97CoordinateX + ", " + data.tree.twd97CoordinateY + ")");
    console.log("Time/Date: " + data.treeRegistration.investigationTime);


    // const result = []; // 建立一個儲存結果的容器
    

    // console.log(result);
    // // 寫入 result.json 檔案
    // fs.writeFileSync("result.json", JSON.stringify(result));
  });
};

// const co = "M 1-20_0031";
// treeDetailData(co);
module.exports = { treeDetailData };
// 每半小時爬一次資料
// setInterval(earthquake, 30 * 60 * 1000);