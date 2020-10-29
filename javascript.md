# javascript

<jsのリファレンス>
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference


javascriptコンソール
shift + enterで改行できる


<cssのリファレンス>
http://www.htmq.com/css3/


```html
            <script>
                document.title = "jsで書き換え"
                console.log("jsで出力")
            </script>

```

## jqueryの使い方
1. サイトからダウンロードして、jquery-1.11.3.min.jsをjquery.min.jsに書き換えて使用
```html
<script src="./lib/jquery.min.js"></script>
```

2. CDNを使用
jqueryをサーバにおいて、自由につかっていいですよ、としてくれているサービスがある。
googleとか。(hosted libraryという)
https://developers.google.com/speed/libraries

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```


### jquery

バージョン1系＝古いブラウザをサポートしている

### DOM

document object model

階層構造をもったオブジェクトのこと。

jsでDOMにアクセスして、それがhtmlに反映される。

js→DOM→html

```js

// この書式でDOMの準備が整ったあとにjsを実行することになる
$(function(){


};)

```

$()=jqueryで使えるようになる関数

function(){}; = jsの関数(?)



  
