const search = document.querySelector(".fa-search");
const list = document.querySelector(".fa-list-ul");
const input = document.querySelector("input");
const menu = document.querySelector(".menu");
const center = document.querySelector(".center");

function handleSearch(){
	input.classList.toggle("active");
}
search.addEventListener("click",handleSearch);

function handleMenu(){
	menu.classList.toggle("active2");
	center.classList.toggle("active3");
}
list.addEventListener("click", handleMenu);















