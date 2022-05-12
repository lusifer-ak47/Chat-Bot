function talk(){
	var know ={
		"hi": "Hi!",
		"hello":"Hello!",
		"how are you":"I am good | how are you?",
		"good":"Glad to hear that!",

		"bey": "Have a Good Day !"
		









		// You can as many comments like above 
		// First word defines Question and second its answer 
	};
	var user = document.getElementById('userBox').value;
	document.getElementById('chatLog').innerHTML = user + "<br>";
	if(user in know){
		document.getElementById('chatLog').innerHTML = know[user] +"<br>";
	}else{
		document.getElementById('chatLog').innerHTML ="I DO NOT UNDERSTAND!";
	}
}

/* Ankith kumar (@nkith_00) */