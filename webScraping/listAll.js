const request = require("request");
const { listTreeCo } = require("./listTreeCo");
const { treeDetailData } = require("./index");

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
        for (i = 1; i < 5; i++) {
            const treeName = json.rows[i].chineseTreeName;
            console.log(i + ". " + treeName);
            listTreeCo(treeName);
        }
        // const treeName = json.rows[1].chineseTreeName;
        // console.log("1. " + treeName);
        // console.log(treeCo);
        // treeDetailData(treeCo);
    })
};

const treename = "克利巴椰子";
const co = "M 1-20_0031";

listAllTree();
listTreeCo(treename);
treeDetailData(co);
