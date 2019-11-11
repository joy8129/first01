var btn = document.querySelectorAll("button");
var btn1 = document.querySelector(".anniu");
for(var i = 0;i<btn.length-1;i++){
	btn[i].onclick = function(){
		for(var j = 0;j<btn.length-1;j++){
			btn[j].style.backgroundColor="#999999";
			btn[j].style.color="white";
			btn[j].style.border="solid 1px #999999";
		}
	this.style.backgroundColor="white";
	this.style.color="red";
	this.style.border="solid 2px red";
	btn1.innerHTML = this.value;
}
}
   