const center=document.querySelector(".center");


function handlesSecondMoveOut(){
	if(center.classList.contains("active")){
	center.classList.remove("active");
	center.classList.add("back");
	}
else{
	center.classList.remove("back");
	center.classList.add("active");
}
}

center.addEventListener("click", handlesSecondMoveOut)