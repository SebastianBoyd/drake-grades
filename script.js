function showInput() {
  document.getElementById("content").className = "";
}
function search(ele) {
    if(event.keyCode == 13) {
        alert(ele.value);
    }
}
