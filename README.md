# React で作成したお天気アプリ

## How to use

### ローカルで試す場合の前提
1. Node.jsの環境が必要です。
```
$ node -v
v14.17.0
// バージョン情報が出力されたらOK！
```
2. 無料で公開されている天気予報apiを使用しています。
ローカルで試す場合は[こちら](https://openweathermap.org/api)からapikeyを取得する必要があります。

### 環境構築
```
$ git clone https://github.com/y-arimura1222/react-weatherApp.git
$ cd react-weatherApp
$ cp .env.sample .env
# .env に取得した apikey を記述してください。

When using npm
$ npm ci
$ npm start

When using yarn
$ yarn
$ yarn start
```

ブラウザにアクセス
[こちら](http://localhost:3000/)
