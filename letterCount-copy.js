function letterCount(word) {
	word = word.toLowerCase();
    var letterCount = {};
    for(i=0;i <word.length; i++){
    if(!(word[i] in countObj)){
        countObj[word[i]]=1;
       }else{
        countObj[word[i]]++;
       }
    }      
    return letterCount;

}


module.exports = letterCount;