console.log('Loaded!');
//move the image
var img = document.getElementById('madi');

    var mgl=0;
    function moveRight(){
        mgl+=2;
        img.style.marginLeft = mgl + 'px';
    }
    img.onclick = function(){
	var interval = setInterval(moveRight, 100);
};