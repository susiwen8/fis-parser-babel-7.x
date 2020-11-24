fis-parser-babel7-plugin
============================

在 [fis-parser-babel-6.x](https://github.com/fex-team/fis-parser-babel-6.x) 基础上改的实验版

移除了内置`preset-stage`

<font color=red>请不要轻易在生产环境上使用</font>

用法和`fis-parser-babel-6.x` 差不多

```js
fis.set('project.fileType.text', 'es');
fis.match('server/**.es', {
    parser: fis.plugin('babel-6.x', {
        // presets: [
        // 注意一旦这里在这里添加了 presets 配置，则会覆盖默认加载的 preset-2015 等插件，因此需要自行添加所有需要使用的 presets
        // ]
    }),
    rExt: 'js'
});
```

<font color=red size=5>此项目不是官方项目</font>
