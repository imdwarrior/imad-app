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

//counter code
var counter=0;
var btn = document.getElementById("counter");
btn.onclick = function(){

//make a request

//capture a request

//render the variable counter in the correct span
counter+=1;
var span = document.getElementById("count");
span.innerHTML = counter.toString();
 };
