const request = require("request");
const fs = require("fs");

const totalTreeCoArray = [];
const totalTreeDetailArray = [];

const listAllTree = () => {
    request({
        url: "https://map.ntu.edu.tw/ntutree/permitAll/treeDb/listAll?_dc=1595339844378",
        method: "GET",
        headers: {
            Content_Type: "application/json;charset=UTF-8"
        }
    }, function(error, response, body) {
        if (error || !body) {
            return;
        }
        // transfer to JSON format
        const json = JSON.parse(body);
        // console.log(json)
        // for (i = 1; i < json.totalCount; i++) {
        const totalTreeNameArray = [];
        for (i = 1; i < 5; i++) {
            const treeName = json.rows[i].chineseTreeName;
            totalTreeNameArray.push(treeName);
            // listTreeCo(treeName);
        }
        console.log(totalTreeNameArray);
        // 寫入 result.json 檔案
        fs.writeFileSync("result.json", JSON.stringify(totalTreeNameArray));

        // const treeName = json.rows[1].chineseTreeName;
        // console.log("1. " + treeName);
    })
};

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
        const treeCoArray = [];
        const subTreeDetail = [];
        for (i = 0; i < data.length; i++) {
            treeCoArray.push(data[i][1]);
            // console.log(data[i][1])
            treeDetailData(data[i][1]);
            // subTreeDetail.push(treeDetailArray);
        }
        // totalTreeCoArray.push(treeCoArray);
        // totalTreeDetailArray.push(subTreeDetail);

        // console.log(data[0][1])
        // treeDetailData(data[0][1]);
        // return data[0][1] // 回傳值顯示undefined
    })
};

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
      const treeDetailArray = {
        id: data.treeDb.id,
        cnName: data.treeDb.chineseTreeName,
        enName: data.treeDb.englishTreeName,
        scientificName: data.treeDb.scientificTreeName,
        grow: data.treeDb.growthFrom,
        height: data.tree.treeHeight,
        treeCrown: data.treeRegistration.treeCrownHeight,
        co: data.tree.co,
        coordinate: [data.tree.twd97CoordinateX, data.tree.twd97CoordinateY],
        time: data.treeRegistration.investigationTime
      }
      return treeDetailArray;
    //   console.log("id: " + data.treeDb.id);
    //   console.log("中文名: " + data.treeDb.chineseTreeName);
    //   console.log("英文名: " + data.treeDb.englishTreeName);
    //   console.log("學名: " + data.treeDb.scientificTreeName);
    //   console.log("生長源: " + data.treeDb.growthFrom);
    //   console.log("樹高: " + data.tree.treeHeight + " 公尺");
    //   console.log("樹冠幅: " + data.treeRegistration.treeCrownHeight + " 平方公尺");
    //   console.log("Tree Registration (co): " + data.tree.co);
    //   console.log("座標: " + "(" + data.tree.twd97CoordinateX + ", " + data.tree.twd97CoordinateY + ")");
    //   console.log("Time/Date: " + data.treeRegistration.investigationTime);
  
      // const result = []; // 建立一個儲存結果的容器
      // console.log(result);
      // // 寫入 result.json 檔案
      // fs.writeFileSync("result.json", JSON.stringify(result));
    });
};

listAllTree();
