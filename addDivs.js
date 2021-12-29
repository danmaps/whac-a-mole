// from https://stackoverflow.com/a/33312039/9904158

var myGrid = document.getElementById('myGrid');
for(var i=9; i>0; i--){ //reverse order to match original
    myGrid.insertAdjacentHTML('afterbegin', '<div class="square" id="'+i+'"></div>')
}