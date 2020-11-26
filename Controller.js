
var Array = [1,2,3,4,5,6,7,8,9]
var colorsObject = {"1":"#000000","2":"#2B8EAD","3":"#333333","4":"#6F98A8","5":"#FFFFFF","6":"#BFBFBF","7":"#EFEFEF","8":"#2F454E","9":"#72C3DC"};


function ShuffleList(){
	this.shuffle(this.Array)
	
	for(i=0; i < document.getElementsByClassName('blocks-list').length ; i++){
		document.getElementsByClassName('blocks-list')[i].style.backgroundColor = this.colorsObject[this.Array[i]];
		document.getElementsByClassName('blocks-list')[i].innerHTML = this.Array[i];
	}
}
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function sortList(){
	this.Array.sort(function(a, b){return a - b})
	for(i=0; i < document.getElementsByClassName('blocks-list').length ; i++){
		document.getElementsByClassName('blocks-list')[i].style.backgroundColor = this.colorsObject[this.Array[i]];
		document.getElementsByClassName('blocks-list')[i].innerHTML = this.Array[i];
	}
}