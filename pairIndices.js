function pairwise(arr, arg) {
  var result = 0;
  var indexCounter = [];
  for (var i =0 ; i < arr.length; i++){
    for(var j= i+1; j< arr.length; j++){
      if(arr[i] + arr[j] == arg & indexCounter.indexOf(i) == -1 && indexCounter.indexOf(j) == -1){
      	indexCounter.push(i);
      	indexCounter.push(j);
      	result += i+ j;
      }
    }
  }
  return result;
}

pairwise([1,4,2,3,0,5], 7);
