function letterCount(word) {
	word = word.toLowerCase().replace(/\s/g, 'x');
    var countObj = {};
    for(i=0;i <word.length; i++){
    if(!(word[i] in countObj)){
        countObj[word[i]]=1;
       }else{
        countObj[word[i]]++;
       }
    }      
    return countObj; 
}


module.exports = letterCount;

// function merge(arr1, arr2){
// 	var resultArr = [];
// 	var finalResult =[];
// 	while(arr1.length > 0 || arr2.length > 0){
// 		if(arr1.length > 0 && arr2.length >0){
// 			if(arr1[arr1.length - 1] > arr2[arr2.length -1]){
// 				resultArr.push(arr1.pop());
// 			}else{
// 				resultArr.push(arr2.pop());
// 			}
// 		}
// 		else if(arr1.length > 0 && arr2.length === 0){
// 				resultArr.push(arr1.pop());
// 		}
// 		 else if(arr2.length > 0 && arr1.length === 0){
// 				resultArr.push(arr2.pop());
// 		}
// 	}

// 	// resultArr.forEach(function(){
// 	// 	finalResult.push(resultArr.pop());
// 	// })
// 	console.log(arr1);
// 	console.log(arr2);
// 	console.log(resultArr);
// 	return finalResult;
// }

function mergeV2(arr1, arr2){
	var result = [];
	while(result.length < (arr1.length + arr2.length)){
		if(arr1.length > 0 && arr2.length > 0){
			if(arr1[arr1.length -1 ] > arr2[arr2.length -1]){
				result.push(arr1.pop());
			}else{
				result.push(arr2.pop());
			}
		}else if(arr1.length === 0){
			ruslt.push(arr2.pop);
		}else{
			result.push(arr1.pop);
		}
	}
	return result;

}

function testMerge(){
	if(merge([1,2,3],[4,5,6]) === [1,2,3,4,5,6]){
		return true;
	}else{
		return false;
	}
}




function flower(){
	this.color = 'red'
	this.smellsPretty = true;
	this.petals = 10
	this.game = function(){
		var exclaim = "";
		for(i=0; i < this.petals; i++){
			if(i === this.petals -1){exclaim = '!'}
			if(i%2 ===0){
				console.log('She loves me' + exclaim);
			}else{
				console.log("She loves me not" + exclaim)
			}
		}
	}
	this.describe = function(){
		console.log("This flower is " + this.color);
	}
}






