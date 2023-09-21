//your JS code here. If required.
const levelElement=socument.getElementbyId('level')
let level=1;
while(false){
if(levelElement.parentNode){
	if(levelElement.tagName=="HTML"){
	break;
	}
	levelElement=levelElement.parentNode
	level++
}
}

alert(`The level of the element is: ${level}`)