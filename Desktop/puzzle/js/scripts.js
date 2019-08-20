$(document).ready(function() {
  $("form.phrases").submit(function(event) {
    event.preventDefault();

    var userPhrase = $('.ui1').val();
    console.log(userPhrase);

    var characters = [];
    characters = userPhrase.split("");


    console.log(characters);

    //needed triple equals to assign
    characters.forEach(function(character) {
      if ((character.toLowerCase() === "a") || (character.toLowerCase() === "e") || (character.toLowerCase() === "i") || (character.toLowerCase() === "o") || (character.toLowerCase() === "u")) {
      // if (character === "a") {
        character = "-";
        $("#result").append(character);
      } else {
        $("#result").append(character);
      }
    });




  });
});


// $(document).ready(function(){
//   $("form.phrases").submit(function(event){
//     event.preventDefault();
//
//     var userPhrase = "If the grass is greener on the other side, you can bet the water bill is higher.";
//         console.log(userPhrase);
//
//     // userphrase = $(".ui1").val
//
//     // using a regex to search for vowels. no loop necessary.
//     var regex = /[aeiou]/g
//     var newPhrase = userPhrase.replace(regex, "-");
//
//     console.log(userPhrase);
//     console.log(newPhrase);
//     $("#result").text(newPhrase);
//   });
// });
