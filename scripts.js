    const optionBtn =  document.querySelectorAll('div.panel button');
    const reset=document.getElementById('reset');
   let machineScore=0;
   let userScore=0;
   let round=0;
   let winner;
   
    reset.addEventListener('click',resetGame)

    optionBtn.forEach(button => {
        button.addEventListener('click', playRound)
       });
    

    function resetGame(e) {
        location.reload();
    }

    function printScore(round,winner) {
 
        document.getElementById("myTable").rows[winner].cells[round].innerText='X'
    
    }

    function machineChoice(){
        switch (Math.floor(Math.random()*3)+1){
            case 1:
                machine_choice="Rock";
                break;
            case 2:
                machine_choice="Paper";
                break;
            case 3:
             machine_choice="Scissors";
                break;
            }
            return machine_choice;

       }


       function playRound(e) {
           round=round+1;
           win=0;

       var choices=e.target.innerText+machineChoice();
             switch (choices) {
                case 'PaperPaper':
                    win=3;
                    result="Tie";
                    console.log('Tie')
                    break;
                case 'RockRock':
                    win=3;
                    result="Tie";
                    console.log('Tie')
                    break;         
                case 'ScissorsScissors':
                    result="Tie";
                    win=3;
                    console.log('Tie')
                    break;  
                case 'RockScissors':
                    result="Rock beats Scissors";
                    win=1;
                    console.log('User')
                    userScore=userScore+1;
                     break;     
                case 'RockPaper':
                    result="Paper beats Rock ";
                    win=2;
                    console.log('Machine')
                    machineScore=machineScore+1;
                    break;    
                case 'PaperRock':
                    result="Paper beats Rock";
                    win=1;
                    console.log('User')
                    userScore=userScore+1;
                    break;                                       
                case 'PaperScissors':
                    result="Scissors beats Paper";
                    win=2;
                    console.log('Machine')
                    machineScore=machineScore+1;
                    break;       
                case 'ScissorsRock':
                    result="Rock beats Scissors";
                    win=2;
                    console.log('Machine')
                    machineScore=machineScore+1;
                    break;    
                case 'ScissorsPaper':
                    result="Scissors beats Paper";
                    win=1;
                    console.log('User')
                    userScore=userScore+1;
                    break;                    
            default:
                console.log('otro');
                break;
                
            }
            document.getElementById("score").innerHTML=result;
            if (win==3) {
                round=round-1;
            } else {
                printScore(round,win);
            }
            
            if (round==5) {
                optionBtn.forEach(button => {
                    button.disabled = true;
                   });
                if (machineScore<userScore) {
                    winner="You WIN"
                }
                else{ if(machineScore==userScore){
                    winner="Nobody WINS"
                }
                else{
                    winner="You LOSE"
                }

                }
               reset.disabled=false;
               document.getElementById("score").innerHTML=document.getElementById("score").innerHTML+"<br>"+winner+" <br>Game over.... Press Play again"
            }
            
         }
                

    
  