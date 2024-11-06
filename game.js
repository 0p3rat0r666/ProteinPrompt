// prints out the backbone and stores the bases in a variablw
// question 1 A U G G U A G C U A A C C U U
// question 2 C A G G A A U U G C U C G A U
// question 3 G U A C U C A A G G U C U A G
// question 4 U U U C A A U C G A C C A A C
var score = 4; // set as won for testing
var question = [" A U G G U A G C U A A C C U U", " C A G G A A U U G C U C G A U", " G U A C U C A A G G U C U A G", " U U U C A A U C G A C C A A C", " "];

function RNA (){
  console.log("_______________________________");
  console.log(" | | | | | | | | | | | | | | |");
  console.log(question[0]); // change to output the bases for the question
  if(score === 4){
    console.log("congradulations! You finished Protein Prompt!! would you like to restart?(write true or false in lowercase)");
    let restart = prompt();
    if(restart === "true"){
      score = 0;
      RNA();
    }else{
      console.log("thanks for playing!");
    }
  }else{
    console.log("Please look at your chart and type the first three letters of each amino acid IN LOWERCASE. Remember glutamine is gln and glutamate is glu and AUG is start/met, IF IT HASNT SAID START PUT A SPACE.");
  }
}


RNA();

// freaking take answer
