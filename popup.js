document.getElementById("urban").addEventListener("mouseenter", function(){
document.getElementById("urban").style.opacity=0.75;
});

document.getElementById("define").addEventListener("mouseenter", function(){
document.getElementById("define").style.opacity=0.75;
});

document.getElementById("translate").addEventListener("mouseenter", function(){
document.getElementById("translate").style.opacity=0.75;
});

document.getElementById("urban").addEventListener("mouseleave", function(){
document.getElementById("urban").style.opacity=1.0;
});

document.getElementById("define").addEventListener("mouseleave", function(){
document.getElementById("define").style.opacity=1.0;
});

document.getElementById("translate").addEventListener("mouseleave", function(){
document.getElementById("translate").style.opacity=1.0;
});

document.getElementById("urban").addEventListener("click", function(){
	var word = document.getElementById("textfield").value;
	window.open('http://www.urbandictionary.com/define.php?term='+word,'_blank');
});
document.getElementById("define").addEventListener("click", function(){
	var word = document.getElementById("textfield").value;
	window.open('http://www.dictionary.com/browse/'+word+'?s=t','_blank');
});
document.getElementById("translate").addEventListener("click", function(){
	var word = document.getElementById("textfield").value;
	window.open('https://translate.google.ca/#auto/en/'+word,'_blank');
});
												 