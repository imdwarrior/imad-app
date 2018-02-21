<<<<<<< HEAD
console.log('Loaded!');

//move the image
var img = document.getElementById('madi');
img.onclick = function(){
	img.style.marginLeft = '100px';
	
};
=======
console.log('Loaded!');
//move the image
var img = document.getElementById('madi');

    var mgl=0;
    function moveRight(){
        mgl+=1;
        img.style.marginLeft = mgl + 'px';
    }
    img.onclick = function(){
	var interval = setInterval(moveRight, 50);
};
>>>>>>> 33e8bc905a3aa34c21d243c5d92f34282d2fc175
