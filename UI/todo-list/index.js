let listTemplate = document.getElementById("list-item-template");
let text = document.getElementById("name");
let submitBtn = document.getElementById("submit");
let list = document.getElementById("list");

let itemCount = list?.children?.length ?? 0;

submitBtn.addEventListener("click", () => {
  if (text.value) {
    const item = listTemplate.content.cloneNode(true);
    itemCount++;
    item.querySelector(".title").innerText = text.value;
    text.value = "";
    list.append(item);
  }
});

list.addEventListener("click", function (e) {
  const btn = e.target;
  if (btn.classList.contains("done")) {
    btn.parentElement.querySelector("span").classList.toggle("mark-complete");
  } else {
    btn.parentElement.remove();
  }
});
