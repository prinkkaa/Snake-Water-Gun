
let score=0;
let gunScore=0;
let waterScore=0;
let chances=5;


while(chances>0){
    console.log("Choose: Snake, Gun, Water");
    const userInput= prompt("Choose: Snake , Gun , Water");
    if(userInput==="Water"){
        score+=1;
        waterScore+=1;
    }
    else if(userInput==="Gun"){
        score+=2;
        gunScore+=2;
    }
    else if(userInput==="Snake"){
      const  snakeScore =gunScore-waterScore;
        score+=snakeScore;
    }
    chances -= 1;
    console.log(`Score: ${score}, Chances left: ${chances}`); 
}

if(score<=0){
    console.log("You lost the game");
}
else{
    console.log("You won the game");
}