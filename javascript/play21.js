var score=0;
var dealerHand=0;
var aces=0;
var dealerAces=0;

//get random numbers//

function p(x){
  var p=(Math.floor((Math.random())*x)+1);
  return p;
}
function draw(){
  y=p(13);
  return y;
}

//get random suit//

function suit(){
  var y=p(4);switch (y){
    case 1: return "\u2660"; break;
  case 2: return "\u2661"; break;
  case 3: return "\u2662"; break;
  case 4: return "\u2663"; break;
    } 
  return;
}

//get high cards//

function kind(w){
  if(w==1)return "A ";
    if(w==11)return "J ";
    if(w==12)return "Q ";
  if(w==13)return "K ";
  return "" + w;
  }

//account for aces being 1 || 11 //  
  
function total(m){
                    if(m>10)m=10;
                    score+=m;
                    if((score<=11)&&(m===1)) {return (score+=10)+(aces+=1);}
                    if(score>21 && aces>0){return score-=10;}
                  return score;}

//draw cards//				  
				  
function card(){
return draw();
}

//init game//

function game(){
  y=card()
  total(y);
  return (kind(y))+ ' ' +suit();
}

//deal cards//

function cardTo(){
  var newNode = document.createElement('p');
            newNode.innerHTML = game();
			newNode.style.color="#000";
            newNode.style.background="#FFF";
            newNode.style.border="1px solid #000";
            newNode.style.padding="15px 15px";
            document.getElementById('player').appendChild(newNode);
}

//eliminate possible bug//

function disable() {
    document.getElementById("play").disabled = 'true';
}


//play//
document.getElementById("play").addEventListener("click", function(){
    cardTo();
    cardTo();
    document.getElementById("d").innerHTML="Current Score: "+score;
    disable();

//hit//
document.getElementById("hit").addEventListener("click", function(){
  cardTo();
  document.getElementById("d").innerHTML="Updated score: "+score;
  if(score>21 && aces==0){alert("You busted!"); return pA();}
});

//stand//
document.getElementById("stand").addEventListener("click", function(){
  return dealer();
});

});

//get dealersScore//

function dealerScore(m){
                    if(m>10)m=10;
                    dealerHand+=m;
                    if((dealerHand<=11)&&(m===1)) {return (dealerAces+=1)+(dealerHand+=10);}
                    if(dealerHand>21 && dealerAces>0){return dealerHand-=10;}
                  return dealerHand;}

//get dealer cards//				
				  
function dealerCard(){
    x=card()
    dealerScore(x)
    return (kind(x))+ ' ' +suit();
}

//display dealer hand//

function dealer(){
  while(dealerHand<score){
  (function(){   
            var newNode = document.createElement('p');
            newNode.innerHTML = dealerCard();
            newNode.style.background="white";
			newNode.style.color="#000";
            newNode.style.border="1px solid black";
            newNode.style.padding="15px 15px";
            document.getElementById('dealer').appendChild(newNode);           
        })();
  document.getElementById("j").innerHTML= "Dealer's Total: " +dealerHand;
  document.getElementById("j").style.color="#FFF";}
  if(dealerHand===score){alert("Dealer wins in a draw!"); return pA();}
  if(dealerHand===21){alert("Dealer wins with 21!"); return pA();}
  if(dealerHand>21 && dealerAces==0){alert("Dealer busted! You win!"); return pA();}
  if(dealerHand>=score){alert("Dealer wins this round!"); return pA();}
  return compare();
}

//find out who won//

function compare(){
	if(dealerHand<score){alert("You win!");}
else return pA();
}

function pA(){
	document.getElementById("reset").innerHTML = '<input type=button id="pa" value="Play again?">';
	document.getElementById("hit").disabled = 'true';
	document.getElementById("stand").disabled = 'true';
	document.getElementById("pa").addEventListener("click",function(){return document.location.reload();});
}

//find a better way to reset the game ^ //