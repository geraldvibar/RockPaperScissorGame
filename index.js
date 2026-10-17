
        let scoresResult=JSON.parse(localStorage.getItem('scoresResult'));
        if(!scoresResult){
        scoresResult={
            Wins:0,
            Loses:0,
            Ties:0
        };
        }
        gameScore();

function resetScore(){
        scoresResult={
            Wins:0,
            Loses:0,
            Ties:0
        }

    
    localStorage.removeItem('scoresResult');
    gameScore();

}
function play(playerMove){

        let randmNum =Math.floor(Math.random()*3)+1;
        let computerMove='';




        if(randmNum===1){
            computerMove='rock';
        }else if(randmNum===2){
            computerMove='paper';
        }else{
            computerMove='scissors';
        }

        if(playerMove === computerMove){
                document.querySelector('#result').innerHTML='Tie.'; 
                document.querySelector('#chosen').innerHTML=`You <img src="images/${playerMove}-emoji.png"/>
                <img src="images/${computerMove}-emoji.png"/> Computer`;
                scoresResult.Ties++;
        }else if((playerMove==='rock' && computerMove==='scissors') || (playerMove==='scissors' && computerMove==='paper') || (playerMove==='paper' && computerMove==='rock')){
                document.querySelector('#result').innerHTML='You Win.';
                document.querySelector('#chosen').innerHTML=`You <img src="images/${playerMove}-emoji.png"/>
                <img src="images/${computerMove}-emoji.png"/> Computer`;
                scoresResult.Wins++;
        }else{
                document.querySelector('#result').innerHTML='You Lose.';
                document.querySelector('#chosen').innerHTML=`You <img src="images/${playerMove}-emoji.png"/>
                <img src="images/${computerMove}-emoji.png"/> Computer`;
                scoresResult.Loses++;
        }

        gameScore();
                localStorage.setItem('scoresResult',JSON.stringify(scoresResult));

    }

    function gameScore(){
        document.querySelector('#scores').innerHTML=`Wins: ${scoresResult.Wins}, Loses: ${scoresResult.Loses}, Ties: ${scoresResult.Ties}`;
    }


