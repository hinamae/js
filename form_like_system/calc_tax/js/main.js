$(function() {

    var copyText = function(){

        var name = $("#name").val();
        $("#name2").val(name);
        console.log("text",name);
    };

    var copyCheckbox = function() {
        // checkされているかを取得
        var chck = $("#chck").prop("checked");

        $("#chck2").prop("checked",chck);
        var chckVal = $("#chck").val();
        console.log("checkbox",chck,chckVal)
    }

    // チェック済みのチェックボックスの値を出力
    var dumpCheckbox = function(){
        $("input[type=checkbox]:checked").each(function(){
        // idを得る
            var id = $(this).attr("id");
        // on/off関係なく値を得る
        var chckVal = $(this).val();
        // コンソールに出力
        console.log("dump checkbox",id , chckVal);
        });
    }
    
    var copyRadio = function(){
        // ラジオボタンをコピー
        var sex = $("input[name=sex]:checked").val();
        // チェックを反映
        $("input[name=sex2]").val([sex]);
        // コンソールに出力
        console.log("radio",sex);
    };

    // selectタグ
    var copySelect = function(){
        // 選択されている値を取得
        var lsts =  $("#lst").val();
        // 選択を反映
        $("#lst2").val(lsts);

        // コンソールに出力
        console.log("select", lsts);

    };


    // テキストエリアをコピー
    var copyTextArea = function(){
        // テキストを取得
        var free = $("#free").val();

        // テキストを設定
        $("#free2").val(free);

        // コンソールに出力
        console.log("textarea",free);
    };

    // すべてをコピー
    var copyAll = function(){
        console.log("--------------");
        // テキストをコピー
        copyText();
        // チェック済みのチェックボックスの値を出力
        dumpCheckbox();
        // チェックボックスをコピー
        copyCheckbox();
        // ラジオボタンをコピー
        copyRadio();
        // セレクトをコピー
        copySelect();
        // テキストエリアをコピー
        copyTextArea();

    };

    // copyボタンにイベントを登録
    $("#btnCopy").click(copyAll);

    // 入力が空か確認
    var checkBlank = function(){
        // 入力欄が空か確認
        if ($("#name").val()=""){
            alert("名前が空です");
            return true;
        }
        if ($("#free").val()=""){
            alert("自由記入が空です");
            return true;
        }
        // ラジオボタンが選択されていないか確認
        if ($("input[name=sex]:checked").val() === undefined){
            alert("性別が選択されていません");
            return true;
        }
        if ($("#lst").val() === null){
            alert("リストが選択されていません");
            return true;
        }
        // 問題なし
        return false;
        };


    // submitボタンにイベントを登録
    $("#f").submit(function(){
        var isBlank = checkBlank();
        if (isBlank){
            console.log("stop");
            return false;
        }
    });

    
})