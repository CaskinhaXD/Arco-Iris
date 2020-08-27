const body = document.getElementById("body")

addEventListener("mousemove", function(e){
	body.style.backgroundColor = `hsl(${(e.x/window.innerWidth) * 360}, 70%, ${(e.y/window.innerHeight) * 100}%)`
});