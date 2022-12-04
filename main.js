function getComputerChoice()
{
    let random=Math.random();
    console.log(random);
    if(random<1/3)
    {
        return "ROCK";
    }
    else if(random>=1/3&&random<2/3)
    {
        return "PAPER";
    }
    else 
    {
        return "SCISSORS";
    }

}
console.log(getComputerChoice());
function declareWinner(playerSelection, computerSelection)
{
    let x=playerSelection.toUpperCase();
    
    if(x=="ROCK"&&computerSelection=="SCISSORS")
     return "You Win! Rock beats Scissors";
    
    else if(x=="ROCK"&&computerSelection=="PAPER")
     return "You lose! Paper beats Rock";

    else if(x=="PAPER"&&computerSelection=="ROCK")
     return "You Win! Paper beats Rock";

    else if(x=="PAPER"&&computerSelection=="SCISSORS")
     return "You Lose! Scissors beats Paper";

    else if(x=="SCISSORS"&&computerSelection=="ROCK")
     return "You Lose! Rock beats Scissors";
    
    else if (x=="SCISSORS"&&computerSelection=="PAPER")
     return "You Win! Scissors beats Paper";

    else
    return "";
}
function game()
{
    for(let i=1;i<=5;i++)
    {
        let playerSelection=prompt("Throw either Rock or Paper or Scissors!");
        let computerChoice=getComputerChoice();
        
       console.log(declareWinner(playerSelection, computerChoice));
     
    }
}
