// My role in the group is: Part 4, Refactor the code

// Here is my part of the challenge:

var sum = function(array) {
	var s = 0;
	for (var i = 0; i < array.length; i++) {
		s += array[i];
	}
	return s;
}


var mean = function(array) {
	var add = 0;
	for (var i = 0; i < array.length; i++) {
		add += array[i];
		var average = add / array.length; 
	}
	return average;
}


var median = function(array) {
    var sortedArray = array.sort();
	if (sortedArray.length % 2 === 0){
	    var x = sortedArray.length/2;
	    return (sortedArray[x - 1] + sortedArray[x])/2;
	}
	else {
        var x = Math.floor(sortedArray.length/2);
	    return sortedArray[x];
	}
}

