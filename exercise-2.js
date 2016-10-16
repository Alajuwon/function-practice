// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a,b){;
    //...

    if (a > b) {
    	return a;
    } else{
    	return b;
    }

}
//(a) && (b) has to be defined with variables right?????


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    //...find the largest of the (3) numbers.
    if(a >= b && a >= c){
    	return a;
    } if (c >= b && c >= a){
    	return c;
    } else{
    	return b;
    }

}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
	
	var letters =["a","e","i","o","u"];
     
     if letters ("a","e","i","o","u"){
     	return true
     }else {
     	false
     }
}					


   


// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". 
// That is, double every consonant and place an occurrence of "o" in between. 
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
	var newWord ="";
	for (var count = 0; count < phrase.length; count++){
		var letter = phrase[count];
		if (cleanerIsVowel(letter) || letter === " "){
			newWord += letter;
		}	else {
			newWord += letter + "o" = letter;
		}
		
	}
	return newWord;
}
rovarspraket("hello");

//h => hoh
//e => e
//newWord => hohelollolo

// ---------------------
// Define a function reverse() that computes the reversal of a string. 
//For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(word){
	var newWord = " ";
	for (var count = 0;count< word.length; count ++){
	var newWord = word[count]
	word.unshift(letter);
	
	}

	return word

}










