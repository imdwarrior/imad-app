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
var btn = document.getElementById("counter");
btn.onclick = function(){

//create a request by using XMLHttpRequest
var request = new XMLHttpRequest();

//capture a request and store it in a variable
request.onreadystatechange = function() {
	if(request.readyState === XMLHttpRequest,DONE)
	{
		if(request.status === 200){
            var counter = request..responseText;
			var span = document.getElementById("count");
			span.innerHTML = counter.toString();
		}
		
	} //ignore if not done
};
	//make a request
	request.open('GET','http://ask4mohitdrocker.imad.hasura-app.io/counter',true);
	request.send(null);

 };
