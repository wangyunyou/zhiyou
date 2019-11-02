module.exports = {
    rules: {
        'no-console': 'off',
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                "message": "Unexpected property on console object was called"
            }
        ],
        "parser": "vue-eslint-parser"
    },
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}