var movie=[];
var userInput;
// var user1;
var input = "input";
// var name=[];

$(".add").click(function() {
    userInput=$(".picture-url").val();
    movie.push(userInput);
    $("#gallery").append("<img src=" + userInput + ">");

    // user1=$(".movie-name").val();
    
    // name.push(user1); 
    
    
    // $(".names").append("<li>" + user1 + "</li>");
}); 




$(".subtract").click(function() {
    movie.pop(userInput - 1);
	console.log(userInput);
	document.getElementById("gallery").innerHTML = movie;});
 