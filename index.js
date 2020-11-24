'use strict';

var babel = require('@babel/core');
var presetEnv = require('@babel/preset-env');
var react = require('@babel/preset-react');


module.exports = function (content, file, conf) {
   // 添加 useBabel 配置项，如果 useBabel 为 false 则不进行编译
    if (file.useBabel === false) {
        return content;
    }

    conf = fis.util.extend({
        presets: [
            presetEnv,
            react
        ]
    }, conf);

    // 添加 jsx 的 html 语言能力处理
    if (fis.compile.partial && file.ext === '.jsx') {
        content = fis.compile.partial(content, file, {
            ext: '.html',
            isHtmlLike: true
        });
    }

    // 出于安全考虑，不使用原始路径
    // conf.filename = file.subpath;

    var result = babel.transform(content, conf);
    return result.code;
};
