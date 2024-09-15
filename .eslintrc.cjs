module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin: prettier/recommended',
    'prettier',
  ],
  plugins : ['react'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },

  "rules": {
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars":"errors"
  }
}
