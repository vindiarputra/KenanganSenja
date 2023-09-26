var draggable = document.getElementById("draggable");

draggable.addEventListener("dragstart", function (e) {
  e.dataTransfer.setData("text/plain", "dummy");
});

draggable.addEventListener("drag", function (e) {
  draggable.style.left = e.clientX + "px";
  draggable.style.top = e.clientY + "px";
});
