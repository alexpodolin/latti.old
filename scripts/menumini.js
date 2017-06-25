function showHidePosition(positionId, val) {
    var position = document.getElementsByClassName(positionId)[0];
    position.style.display = (position.style.display == 'none' || !position.style.display) ? val : "";
}
function showHidePositionFlow(positionId, val) {
    var position = document.getElementsByClassName(positionId)[0];
    if (position.style.right == '-295' || !position.style.right) {
        position.style.right = '-15px';
document.getElementsByClassName('main')[0].style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        position.style.right = "";
document.getElementsByClassName('main')[0].style.backgroundColor = '';
    }


}

window.onload = function() {
    document.getElementsByClassName('menu-mini')[0].onclick = function() { showHidePosition('main-menu', 'block'); }
    var menuMiniInfo = document.getElementsByClassName('menu-mini-info')[0];
    if (menuMiniInfo) {
        menuMiniInfo.onclick = function() { showHidePositionFlow('col_right1', 'block'); }
    }
}