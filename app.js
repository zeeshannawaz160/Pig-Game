/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, sumCurrent, sumScore0, currentToScore, diceDOM;

scores = [0,0];
roundScore = 0;
activePlayer = 0;
sumCurrent = 0;
sumScore0 = 0;
sumScore1 = 0;

const target = 10;

diceDOM = document.querySelector('.dice');



document.querySelector('.btn-new').addEventListener('click',function(){

       document.getElementById('score-0').textContent = 0;
       document.getElementById('current-0').textContent = 0;
       document.getElementById('score-1').textContent = 0;
       document.getElementById('current-1').textContent = 0;

       document.querySelector('.player-0-panel').classList.add('active');
       document.querySelector('.player-1-panel').classList.remove('active');


       document.querySelector('.player-0-panel').classList.remove('winner');
       document.querySelector('.player-1-panel').classList.remove('winner');

       document.getElementById('name-0').textContent = 'PLAYER 1';
       document.getElementById('name-1').textContent = 'PLAYER 2';


       diceDOM.style.display = 'none';

       sumScore0 = 0;
       sumScore1 = 0;
       sumCurrent = 0;
       activePlayer = 0;
       
});

document.querySelector('.btn-roll').addEventListener('click', function() {
       
       if(sumScore0 < target && sumScore1 < target) {

              dice = Math.floor(Math.random() * 6) + 1;
              diceDOM.style.display = 'block';
              diceDOM.src = 'dice-' + dice + '.png';

       
              if(dice !== 1) {
                     sumCurrent = sumCurrent + dice;
                     document.getElementById('current-' + activePlayer).textContent = sumCurrent;
                     currentToScore = sumCurrent;
              }
              else {
                     document.getElementById('current-' + activePlayer).textContent = 0;
                     sumCurrent = 0;

                     activeFunction();
              }
       }
       winnerFunction();
});

document.querySelector('.btn-hold').addEventListener('click', function() {

       if(sumScore0 < target && sumScore1 < target) {
              if(activePlayer === 0) {
                     sumScore0 = sumScore0 + sumCurrent;
                     document.getElementById('score-' + activePlayer).textContent = sumScore0;
              }else {
                     sumScore1 = sumScore1 + sumCurrent;
                     document.getElementById('score-' + activePlayer).textContent = sumScore1;
              }
              
              document.getElementById('current-' + activePlayer).textContent = 0;
              sumCurrent = 0;
       
              activeFunction(); 
        
              diceDOM.style.display = 'none';

       }
       winnerFunction();
});

function activeFunction() {
       if (activePlayer === 1) {
              activePlayer = 0;
              document.querySelector('.player-0-panel').classList.add('active');
              document.querySelector('.player-1-panel').classList.remove('active');
       }
       else {
              activePlayer = 1;
              document.querySelector('.player-1-panel').classList.add('active');
              document.querySelector('.player-0-panel').classList.remove('active');
       }
}

function winnerFunction() {
       if (sumScore0 >= target || sumScore1 >= target) {
              if (activePlayer === 1) {
                     document.querySelector('#name-0').textContent = 'WINNER';
                     document.querySelector('.player-0-panel').classList.remove('active');
                     document.querySelector('.player-1-panel').classList.remove('active');
                     document.querySelector('.player-0-panel').classList.add('winner');
              }
              else {
                     document.querySelector('#name-1').textContent = 'WINNER';
                     document.querySelector('.player-1-panel').classList.remove('active');
                     document.querySelector('.player-0-panel').classList.remove('active');
                     document.querySelector('.player-1-panel').classList.add('winner');
              }
       }
}

document.querySelector('.instructions').addEventListener('click',function() {
       document.querySelector('.popup').style.display = 'inline-block';
});

document.querySelector('.popup__cross').addEventListener('click',function() {
       document.querySelector('.popup').style.display = 'none';
});

