let userChoice = "";
let computerChoice = "";
let userScore =0;
let computerScore=0;
let flag = 0;

    function getComputer(){
        rand =Math.floor( Math.random() * 3);
        switch(rand){
            case 0:
                return "rock";
                break;
            case 1:
                return "scissor";
                break;
            case 2:
                return"paper";
                break;    
        }
    }
    function game(){
        if(computerChoice == userChoice){
            return;
        }else if(userChoice == "scissor"){
            if(computerChoice == "rock"){
                computerScore++;
            }else{
                userScore++;
            }
        }else if(userChoice == "paper"){
            if(computerChoice == "rock"){
                userScore++;
            }else{
                computerScore++;
            }
        }else if(userChoice == "rock"){
            if(computerChoice == "paper"){
                computerScore++;
            }else{
                userScore++;
            }
        }
    }

        document.addEventListener('DOMContentLoaded', () => {
            const output = document.querySelector('.output');
            const score1 = document.querySelector('.score.player');
            const score2 = document.querySelector('.score.bot');
        function addItem(string,output){
            
            const item = document.createElement('h3');
            const choice =document.createElement('img');
            item.textContent = "COMPUTER CHOICE:";
            choice.src = `/img/${string}.jpg`;
            output.appendChild(item);
            output.appendChild(choice);
        }
        function showResult(string,output){
            const result = document.createElement('p');
            const restart = document.createElement('button');
            result.textContent = string;
            restart.textContent = "RESTART";
            restart.classList = 'restart';
            output.appendChild(result);
            output.appendChild(restart);
        }
        function adaptScore(){
            score1.textContent = userScore;
            score2.textContent = computerScore;
            if(userScore == 3){
                flag = 1;
                return "YOU WIN!!";
            }else if(computerScore == 3){
                flag = 1;
                return "YOU LOSE";
            }
        }
        function removeSiblings() {
            while(output.firstChild){
                output.removeChild(output.firstChild);
            }
        }
        function handleChoice(choice) {
            if (flag === 1) return;
            removeSiblings();
            userChoice = choice;
            computerChoice = getComputer();
            addItem(computerChoice, output);
            game();
            const outcome = adaptScore();
            if (outcome) showResult(outcome, output);
        }
    
        const paper = document.querySelector('.paper');
        paper.addEventListener('click', () => handleChoice("paper"));
    
        const rock = document.querySelector('.rock');
        rock.addEventListener('click', () => handleChoice("rock"));
    
        const scissor = document.querySelector('.scissor');
        scissor.addEventListener('click', () => handleChoice("scissor"));
        output.addEventListener('click',(event) =>{
            if(event.target.classList.contains('restart')){
                removeSiblings();
                computerScore = 0;
                userScore = 0;
                flag = 0;
                adaptScore();
            }
        });
    });
        
    