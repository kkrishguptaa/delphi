const borderBox = document.querySelector("#css-box .box-padding");
const contentBox = document.querySelector("#css-box .box-content");

const boxSizingSelect = document.getElementById("box-sizing-select");

boxSizingSelect.addEventListener("change", (e) => {
  const value = e.target.value;

  if (value === "border-box") {
    borderBox.classList.add("box-sizing");
    contentBox.classList.remove("box-sizing");
  } else {
    borderBox.classList.remove("box-sizing");
    contentBox.classList.add("box-sizing");
  }
});
