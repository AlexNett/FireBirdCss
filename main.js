var toggle = document.getElementById("toggle");
var table = document.getElementById("infoTable");
var trs = table.getElementsByTagName("tr");
var toggler = document.getElementsByClassName("fa-chevron-down");
toggler[0].style.transition = "0.5s";

for(var i = 2; i < trs.length; i++){
		trs[i].style.display = "none";
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var deg = 180;

async function close() {
	
	
	deg -= 180;
	
	toggler[0].style.transform = "rotate("+ deg +"deg)";
	for(var i = trs.length-1; i > 1; i--){
		trs[i].style.display = "none";
		
  await sleep(5);
	}
	
	toggle.onclick = open;
}

async function open() {
	
	deg -= 180;
	
	toggler[0].style.transform = "rotate("+ deg +"deg)";
	for(var i = 2; i < trs.length; i++){
		trs[i].style.display = "table-row";
  await sleep(5);
	}
	
	toggle.onclick = close;
	
}

toggle.onclick =  close;
close();