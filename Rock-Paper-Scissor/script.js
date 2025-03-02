// let Player = 'scissor';

// let computer = ['rock', 'paper', 'scissor'];

// let computerplay = computer[Math.floor(Math.random()*computer.length)];

// let result = Player === computerplay ? 'Tie' : Player === 'rock' && computerplay === 'paper' ? `computer win's`  
//             : Player === 'paper' && computerplay === 'scissor' ? `computer win's` 
//             :Player === 'scissor' && computerplay === 'rock' ? `computer win's` : `Player win's`;

// console.log(Player);
// console.log(computerplay);
// console.log(result);

let confimation = confirm("shall we play Rock, Paper, Scissor");

console.log(confimation);

if(confimation)
{
    this.Start();
}

function Start()
{
    let player = prompt("Enter the your choice in rock / paper / scissor");

    if(player)
    {
        let Player = player.trim().toLowerCase();

        if(Player === 'rock' || Player === 'scissor' || Player === 'paper')
        {
            let computer = ['rock', 'paper', 'scissor'];

            let computerplay = computer[Math.floor(Math.random()*computer.length)];

            let result = Player === computerplay ? 'Tie' : Player === 'rock' && computerplay === 'paper' ? `computer win's`  
                    : Player === 'paper' && computerplay === 'scissor' ? `computer win's` 
                    :Player === 'scissor' && computerplay === 'rock' ? `computer win's` : `Player win's`;

            alert(`Computer chioce is ${computerplay}`);

            alert(result);

            let continue_game = prompt('Do you want continue the game ? y / n ');

            if(continue_game === 'y')
            {
                Start();
            }
            else
            {
                alert('Thank you! see you soon.....');
            }
        }
        else
        {
            alert('Invalid! input try again...')

            this.Start();
        }
    } 
    else
    {
            alert("Kindly enter the input");

            this.Start();
    }
}
