module.exports = () => {
	Document.prototype.getAll = (selector) => {
	   let domElemList = document.querySelectorAll(selector);
	   if(!domElemList.length){
	   	console.log("could not find elements with selector: " + selector);
	   	return false;
	   }
	   let jsArray = [];
	   for(var i = 0; i < domElemList.length; i++){
	   		jsArray.push(domElemList[i]);
	   }
	   return jsArray;
	}
}