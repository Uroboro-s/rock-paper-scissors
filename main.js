function getComputerChoice()
{
    let random=Math.random();
    
    if(random<1/3)
    {
        document.getElementById('compSelect').src='images/rock.png';
        return "ROCK";
    }
    else if(random>=1/3&&random<2/3)
    {
        document.getElementById('compSelect').src='images/paper.png';
        return "PAPER";
    }
    else 
    {
        document.getElementById('compSelect').src='images/scissors.png';
        return "SCISSORS";
    }
    
}

function declareWinner(playerSelection, computerSelection)
{
    let x=playerSelection;
    
    if(x=="ROCK"&&computerSelection=="SCISSORS")
    {
        calculatePoints(1);
     return "You Win! Rock beats Scissors";
    }
    else if(x=="ROCK"&&computerSelection=="PAPER")
     {
        calculatePoints(0);
        return "You lose! Paper beats Rock";
     }

    else if(x=="PAPER"&&computerSelection=="ROCK")
     {
        calculatePoints(1);
        return "You Win! Paper beats Rock";
     }
    else if(x=="PAPER"&&computerSelection=="SCISSORS")
     {
        calculatePoints(0);
        return "You Lose! Scissors beats Paper";
    }
    else if(x=="SCISSORS"&&computerSelection=="ROCK")
     {
        calculatePoints(0);
        return "You Lose! Rock beats Scissors";
      }
    else if (x=="SCISSORS"&&computerSelection=="PAPER")
     {
        calculatePoints(1);
        return "You Win! Scissors beats Paper";
    }
    else
    
     return "Ughhh! It's a tie! So boring...";
     
}


function calculatePoints(key)
{
    const playerPoints=document.querySelector('#playerPoints');
    const compPoints=document.querySelector('#computerPoints');

    if(key==1)
    {
        playerPoints.textContent++;
    }
    else
    {
        compPoints.textContent++;

    }
}

function resetPoints()
{
const playerPoints=document.querySelector('#playerPoints');
const compPoints=document.querySelector('#computerPoints');
const result=document.querySelector('#result');
result.textContent="BEGIN";
playerPoints.textContent="0";
compPoints.textContent="0";
document.getElementById('playerSelect').src="";
document.getElementById('compSelect').src="";
}


function onRock()
{
    document.getElementById('playerSelect').src='images/rock.png';
    var computerChoice=getComputerChoice();
    let displayContent=declareWinner("ROCK", computerChoice);
    console.log(displayContent);
    var display=document.querySelector('#result');
    display.textContent=displayContent;
    
}
function onPaper()
{
    document.getElementById('playerSelect').src='images/paper.png';
    var computerChoice=getComputerChoice();
    let displayContent=declareWinner("PAPER", computerChoice);
    var display=document.querySelector('#result');
    display.textContent=displayContent;

}
function onScissors()
{
    document.getElementById('playerSelect').src='images/scissors.png';
    var computerChoice=getComputerChoice();
    let displayContent=declareWinner("SCISSORS", computerChoice);
    var display=document.querySelector('#result');
    display.textContent=displayContent;

}
function game()
{
    
    const rock=document.querySelector('#rock');
    const paper=document.querySelector('#paper');
    const scissors=document.querySelector('#scissors');
    const reset=document.querySelector('#restart');
     rock.addEventListener('click', onRock);
     paper.addEventListener('click', onPaper);
     scissors.addEventListener('click', onScissors);
     restart.addEventListener('click', resetPoints);
        
       
}
game();
