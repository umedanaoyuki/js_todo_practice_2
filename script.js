"use strict";
const table = document.querySelector("table"); // 表
const todo = document.getElementById("todo"); // TODO
const priority = document.querySelector("select"); // 優先度
const deadline = document.querySelector('input[type="date"]'); // 締切
const submit = document.getElementById("submit"); // 登録ボタン

submit.addEventListener("click", () => {
  const item = {}; // 入力値を一時的に格納するオブジェクト

  item.todo = todo.value;
  item.priority = priority.value;
  item.deadline = deadline.value;

  if (deadline.value != "") {
    item.deadline = deadline.value;
  } else {
    const date = new Date(); // 本日の日付情報を取得
    item.deadline = date.toLocaleDateString().replace(/\//g, "-"); // 日付の体裁を変更
  }

  item.done = false; // 完了はひとまずBoolean値で設定

  console.log(item); // 確認してみる

  // フォームをリセット
  todo.value = "";
  priority.value = "普";
  deadline.value = "";

  const tr = document.createElement("tr");

  // オブジェクトの繰り返しはfor-in文
  for (const prop in item) {
    const td = document.createElement("td");

    if (prop == "done") {
      const checkbox = document.createElement("input"); // 要素生成
      checkbox.type = "checkbox"; // type属性をcheckboxに
      checkbox.checked = item[prop]; // checked属性を設定
      td.appendChild(checkbox); // td要素の子要素に
    } else {
      td.textContent = item[prop];
    }
    tr.appendChild(td);
  }

  table.append(tr);
});
