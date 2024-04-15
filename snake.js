const prompt = require('prompt-sync')({sigint: true});

//Normal DICE
function dice(){
    return Math.floor(Math.random()
    *6)+1
}
//Crooked DICE for Even Numbers
function crookedDice(){
    const arr=[2,4,6]
    return arr[Math.floor(Math.random()*3)];
}

function play(){

    let initialPosition=false
    let endPosition=100;
    let startPosition=0;
    let snake={10:5,84:56,96:88,33:10,67:17}
    
    const ans= prompt("Enter  1.Normal Dice  2.Crooked Dice ====")
    
    //Select which Type of Dice you want
    const dices= ans==='2'? crookedDice:dice
    
    //wait for the first 6 to start the game
   while(initialPosition==false){
       prompt("ROLL DICE")
       const roll=dices();
      
       if(roll==6){
           initialPosition=true;
           startPosition=1
       }
   
        console.log(`"DICE" : ${roll} , "CURRENT POSITION" :${startPosition}`)
   }
    

    while (startPosition<=endPosition){
        prompt("Roll DICE ------>")
        const roll=dices()
        
        //Increasing Current Postion according to dice
        initialPosition?startPosition+=roll:""
        
        //If snake then Change the current position to tail of snake
        if(snake[startPosition]){
            console.log(`SNAKE !!!!!!! ${startPosition} ---> ----->-----> ${snake[startPosition]}`)
            startPosition=snake[startPosition]
        }
         
        //For winning position
        if(startPosition===endPosition){
            return "WINN"
        }
       
        //Checking until start==end
        if(startPosition>endPosition){
            startPosition-=roll
        }
        
        console.log(`"DICE" : ${roll} , "CURRENT POSITION" :${startPosition}`)
    }
}
console.log(play())