/* 关于exports与module.exports的区别
** 1. module.exports => {} <= exports
** 2. require 返回的是 module.exports
** 3. 不更改导出对象（仅添加属性方法等）则使用exports
*/

console.log(exports);
console.log(module.exports);

module.exports = {a: 'a'};

console.log(exports);
console.log(module.exports)