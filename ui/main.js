console.log('Loaded!');

//submit username and password
 var submit = document.getElementById("submit_btn");
 submit.onclick = function(){

//create a request by using XMLHttpRequest
var request = new XMLHttpRequest();

//capture a request and store it in a variable
request.onreadystatechange = function() {
	if(request.readyState === XMLHttpRequest.DONE)
	{
		if(request.status === 200){
            console.log("user logged in");
            alert("Logged in Successfully");
				}
			else if(request.status === 403) {
				alert("Username/Password is incorrect");
			}
			else if (request.status === 500) {
				alert("something went wrong");
			}
	} //ignore if not done
};
	//make a request
 	 var username = document.getElementById('username').value;
 	 var password = document.getElementById('password').value;
 	 console.log('username');
 	 console.log('password');
	request.open('POST','http://ask4mohitdrocker.imad.hasura-app.io/login', true);
	request.setRequestHeader('Content-Type', 'application/json');
	request.send(JSON.stringify({username:username, password:password}));
};