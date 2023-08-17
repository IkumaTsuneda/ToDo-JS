import "./styles.css";

const onClickAdd = () => {
  //入力値取得
  const inputText = document.getElementById("add-text").value;
  //入力値初期化
  document.getElementById("add-text").value = "";
  //未完了リストに項目を追加
  createIncompleteList(inputText);
};

/** 未完了リストから指定の要素を削除 */
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

/** 未完了リストに項目を追加する */
const createIncompleteList = (text) => {
    //divタグ作成
    const div = document.createElement("div");
    div.className = "list-row";
  
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
  
    //button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";

    //完了ボタンクリックイベント
    completeButton.addEventListener("click", () => {
      //押下された完了ボタンの親タグ(div)を未完了リストから削除
      deleteFromIncompleteList(completeButton.parentNode);
  
      //完了リストに追加する要素
      const addTarget = completeButton.parentNode;
  
      //内容取得
      const text = addTarget.firstElementChild.innerText;
  
      //div以下を初期化
      addTarget.textContent = null;
  
      //liタグ生成
      const li = document.createElement("li");
      li.innerText = text;
  
      //button(戻す)タグ生成
      const backButton = document.createElement("button");
      backButton.innerText = "戻す";

      //戻すボタンクリックイベント
      backButton.addEventListener("click", () => {
        //押下された戻すボタンの親タグ(div)を完了リストから削除
        const deleteTarget = backButton.parentNode;
        document.getElementById("complete-list").removeChild(deleteTarget);
  
        //内容取得
        const text = backButton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);
      })
  
      //divタグの子要素に各要素を設定
      addTarget.appendChild(li);
      addTarget.appendChild(backButton);
  
      //完了リストに追加
      document.getElementById("complete-list").appendChild(div);
    });
  
    //button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";

    //削除ボタンボタンクリックイベント
    deleteButton.addEventListener("click", () => {
      //押下された削除ボタンの親タグ(div)を未完了リストから削除
      deleteFromIncompleteList(deleteButton.parentNode);
    });
  
    //divタグの子要素に各要素を設定
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
  
    //未完了リストに追加
    document.getElementById("incomplete-list").appendChild(div);
}

/** 追加ボタン */
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
