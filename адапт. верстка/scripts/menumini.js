function showHidePosition(positionId, val) {
    var position = document.getElementsByClassName(positionId)[0];
    position.style.display = (position.style.display == 'none' || !position.style.display) ? val : "";
}
function showHidePositionFlow(positionId, val) {
    var position = document.getElementsByClassName(positionId)[0];
    if (position.style.right == '-250' || !position.style.right) {
        position.style.right = '-40px';
    } else {
        position.style.right = "";
    }
}

window.onload = function() {
    document.getElementsByClassName('MenuMini')[0].onclick = function() { showHidePositionFlow('leftMenu', 'block'); } 
}