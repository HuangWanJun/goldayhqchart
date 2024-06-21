/*
   Copyright (c) 2018 jones
 
    http://www.apache.org/licenses/LICENSE-2.0

   开源项目 https://github.com/jones2000/HQChart
 
   jones_2000@163.com

   npm HQChart 接口
*/

//行情图形库
module.exports.Chart = require('./umychart.vue.js').default;

//行情图形库 调试用
//module.exports.Chart = require("../src/jscommon/umychart.vue/umychart.vue.js").default;

//行情股票数据接口类
module.exports.Stock = require('./umychart.stock.vue.js').default;

//行情股票数据接口类
module.exports.RegressionTest = require('./umychart.regressiontest.vue.js').default;