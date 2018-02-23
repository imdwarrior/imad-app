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

			var span = document.getElementById("count");
			span.innerHTML = counter.toString();
		}
		
	} //ignore if not done
};
	//make a request
	request.open('GET','http://ask4mohitdrocker.imad.hasura-app.io/',true);
	request.send(null);

 };

 //submit name
 var nameInput = document.getElementById('name');
 var name = nameInput.value;
 var submit = document.getElementById('submit_btn');
 submit.onclick = function(){
 	//make a request to the server and send the the names

 	//captures the name and render it as a list
 	var names = ['name1','name2','name3','name4'];
 	var list = '';
 	for(var i=0,i<names.length;i++){
 		list+= '<li>' + names[i] + <'/li'> ;
 	}
 	var ul = document.getElementById('namelist');
 	ul.innerHTML = list;
 };
