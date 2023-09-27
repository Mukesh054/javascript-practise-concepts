let count = 0;
let styleSheet = null;

const updateCount = (val) => {
  count += val;
  document.getElementById("queueCount").innerText = count;
};

const appendDynamicAnimation = (name, styles) => {
  if (!styleSheet) {
    styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    document.head.appendChild(styleSheet);
  }

  styleSheet.sheet.insertRule(
    `@keyframes ${name} {${styles}}`,
    styleSheet.length
  );
};

const getAnimationBar = () => {
  const loadingBar = document.createElement("div");

  appendDynamicAnimation(
    "loadingBar",
    `
        0%{
            width: 0%;
        }
        100%{
            width: 100%;
        }
        `
  );

  loadingBar.style.height = "10px";
  loadingBar.style.backgroundColor = "red";
  loadingBar.style.width = "0";
  loadingBar.style.marginBottom = "10px";
  loadingBar.style.animation = "loadingBar 3s forwards";

  const entry = document.getElementById("entry");
  entry.appendChild(loadingBar);

  loadingBar.addEventListener("animationend", () => {
    updateCount(-1);
    if (count > 0) {
      getAnimationBar();
    }
  });

  loadingBar.removeEventListener("animationend", () => {});
};

document.getElementById("btn").addEventListener("click", (e) => {
  if (count === 0) {
    getAnimationBar();
  }
  updateCount(1);
});
