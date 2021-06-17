# 下载
```
npm install count-down-fun
```
# 使用
```javascript
const { countDownFun } = require('count-down-fun');
const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
// 第一个参数: 结束日期；第二个参数：回调函数
countDownFun(deadline, res => {
    console.log(res); // { days: xx, hours: xx, minutes: xx, seconds: xx }
})
```