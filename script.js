console.log("hello");

const collapseBtn = document.querySelector("side-panel-collapse-btn");
const mainContainer = document.getElementById("main-container");
const sidePanel = document.querySelector(".side-panel")

function collapseSidePanel() {
    mainContainer.classList.toggle('collapsed');
    collapseBtn.style.transform="rotate(180deg)";
    collapseBtn.style.left="0%";
}