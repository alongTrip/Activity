// 通过修改.eslintrc.js文件来修改检测规则。以下修改允许在正式环境进行日志打印，方便调试：
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    rules: {
        "space-before-function-paren": 0,
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}