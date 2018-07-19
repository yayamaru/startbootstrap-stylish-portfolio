function myCheck() {
    var flag = false; // 選択されているか否かを判定する変数
  
    for (var i = 0; i < document.form1.fruits.length; i++) {
  
      // i番目のチェックボックスがチェックされているかを判定
      if (document.form1.fruits[i].checked) {
        flag = true;    
        alert(document.form1.fruits[i].value + "が選択されました。");
      }
    }
  
    // 何も選択されていない場合の処理   
    if (!flag) {
      alert("項目が選択されていません。");
    }
  }