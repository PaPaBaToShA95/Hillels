#!/bin/bash

# Отримання імені нового проєкту
echo "Введіть назву нового проєкту:"
read project_name

# Створення папки проєкту
mkdir "$project_name"
cd "$project_name"

# Створення базової структури папок
mkdir -p src/js src/style server public assets dist

# Ініціалізація Node.js-проєкту
npm init -y

# Встановлення Webpack та плагінів для автоматизації
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin clean-webpack-plugin mini-css-extract-plugin css-loader sass sass-loader style-loader babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime

# Встановлення модулів для сервера
npm install express dotenv cors nodemon

# Встановлення Prettier
npm install --save-dev prettier

# Створення стандартних файлів
touch .gitignore .env .prettierrc .babelrc webpack.config.js README.md src/index.html

# Створення основних файлів у відповідних папках
touch src/js/index.js src/style/home.scss server/index.js

# Додавання стандартного `.gitignore`
echo "node_modules/
dist/
.env
" > .gitignore

# Налаштування Prettier
echo '{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80
}' > .prettierrc

# Налаштування Babel
echo '{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-transform-runtime"]
}' > .babelrc

# Webpack конфігурація
echo "const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    mode: 'development',
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        hot: true,
        port: 8080,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
};" > webpack.config.js

# Базова структура HTML
echo '<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>'"$project_name"'</title>
</head>
<body>
    <h1>Welcome to '"$project_name"'</h1>
    <script src="bundle.js"></script>
</body>
</html>' > src/index.html

# Основні файли SCSS та JS
echo '@import "variables"; 
body { font-family: Arial, sans-serif; }' > src/style/home.scss

echo 'console.log("JS працює");' > src/js/index.js

# Додавання команд у package.json
npm set-script build "webpack --mode production"
npm set-script dev "webpack serve --mode development --open"
npm set-script format "prettier --write ."

# Відкриття проєкту у VS Code
code .

echo "✅ Проєкт $project_name створено успішно!"
