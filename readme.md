# tofixed-polyfill
## 遇到的问题:
1. js的浮点数运算不准确，(a + b).toFixed(2)能解决一部分问题，但并不完美
```javascript
0.1 + 0.2 //0.30000000000000004
(0.1 + 0.2).toFixed(2) // 0.30
0.815 + 0.1 // 0.9149999999999999
(0.815 + 0.1).toFixed(2) // 0.91，错误！期望0.92
```
2. toFixed并不是我们通常理解的“四舍五入”，而是“四舍六入五留双”  
简单来说就是：四舍六入五考虑，五后非零就进一，五后为零看奇偶，五前为偶应舍去，五前为奇要进一。

```javascript
(0.225).toFixed(2) // 0.23
(0.235).toFixed(2) // 0.23，错误！期望0.24
```
## 使用方法
```javascript
require('tofixed-polyfill')


0.1 + 0.2 //0.30000000000000004
(0.1 + 0.2).toFixed(2) // 0.30
0.815 + 0.1 // 0.9149999999999999
(0.815 + 0.1).toFixed(2) // 0.92
(0.225).toFixed(2) // 0.23
(0.235).toFixed(2) // 0.23

```