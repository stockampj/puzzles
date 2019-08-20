
$(document).ready(function(){
  $("form.phrases").submit(function(event){
    event.preventDefault();

    var userPhrase = "If the grass is greener on the other side, you can bet the water bill is higher.";
        console.log(userPhrase);

    // userphrase = $(".ui1").val

    // using a regex to search for vowels. no loop necessary. 
    var regex = /[aeiou]/g
    var newPhrase = userPhrase.replace(regex, "-");

    console.log(userPhrase);
    console.log(newPhrase);
    $("#result").text(newPhrase);
  });
});
