function reverseString(str) {
	var len = str.length;
	var reversed = '';
	if(str == '') {return null}
	else {
		for(var i = 0; i < len; i++) {
			reversed = str[i] + reversed;
		}
		if(str == reversed) {
			return true;
        }
    }
	return reversed;
}

module.exports.reverseString = reverseString;