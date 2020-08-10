// 一些全局的config配置
const modeUrlObj = {
    // 生产环境
    'production': {
        baseURL: 'http://xxx:9091/pro/',
        authBaseURL: ''
    },
    // 开发环境
    'development': {
        baseURL: 'http://127.0.0.1:7001/',
        authBaseURL: ''
    },
    // 测试环境
    'test': {
        baseURL: 'http://xxxx:9091/test/',
        authBaseURL: ''
    }
}
export default modeUrlObj[process.env.NODE_ENV]
