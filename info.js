/**
  index.js 项目 JS 主入口
  以依赖 layui 的 layer 和 form 模块为例
**/

layui.define(["layer", "form", "code", "element"], function (exports) {
  var layer = layui.layer,
    form = layui.form,
    code = layui.code,
    element = layui.element;
     exports("index", {}); //注意，这里是模块输出的核心，模块名必须和 use 时的模块名一致
});
