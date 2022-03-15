module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/essential'
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        'vue'
    ],
    'rules': {
        'indent': [
            'off',
            2
        ],
        'linebreak-style': [
            'off',
            'windows'
        ],
        'quotes': [
            'off',
            'single'
        ],
        'semi': [
            'off',
            'never'
        ],
        'no-unused-vars':[
            'off'
        ]
    }
}
