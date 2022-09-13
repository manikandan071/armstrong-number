
let randomnum=document.getElementById("randomnum");
let btn=document.getElementById("btn");

btn.addEventListener("click",function(){
	var add=document.getElementById("addval")
	var given=randomnum.value;
	var compare=given;
	var ans=0;
	while(0<given){
		var reminder=given%10;
		ans+=reminder*reminder*reminder;
		given=Math.floor(given/10);
	}
	console.log(ans);
	var x=document.createElement("h3");
	add.appendChild(x);
	if(compare==ans){
		x.innerText="this is amstrong";
	}
	else{
		x.innerText="this is not amstrong";
	}
	
})

