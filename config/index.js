// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
module.exports = {
    // production 环境
    build: {
        // 使用 config/prod.env.js 中定义的编译环境
        env: require('./prod.env'),
        port: 9000,
        index: path.resolve(__dirname, '../dist/index.html'),
        // 编译输出的静态资源根路径
        assetsRoot: path.resolve(__dirname, '../dist'),
        // 编译输出的二级目录
        assetsSubDirectory: 'static',
        // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
        assetsPublicPath: '',
        // 是否开启 cssSourceMap
        productionSourceMap: true,
        // 是否开启 gzip
        productionGzip: false,
        // 需要使用 gzip 压缩的文件扩展名
        productionGzipExtensions: ['js', 'css'],
        // 插件叫做bundleAnalyzerReport，上面有几行注释，讲的是只要在打包的时候输入npm run build --report,就可以在打包的同时查看每个打包生成的js，里面的库的构成情况，方便我们进行相关的删减，比如有的库太大了，是否可以自己实现，有的库是否有必要，可否删除之类
        bundleAnalyzerReport: process.env.npm_config_report
    },
    // 使用 config/dev.env.js 中定义的编译环境
    dev: {
        env: require('./dev.env'),
        // 运行测试页面的端口
        port: 8080,
        // 是否自动打开浏览器
        autoOpenBrowser: true,
        // 编译输出的二级目录
        assetsSubDirectory: 'static',
        // 编译发布上线路径的根目录，可配置为资源服务器域名或 CDN 域名
        assetsPublicPath: '/',
        // 需要 proxyTable 代理的接口（可跨域）
        proxyTable: {},
        // 是否开启 cssSourceMap
        cssSourceMap: false
    }
}