var amount=100;
var won=0;
var lose=0;

function Gambling(){
    while((amount<200) || (amount===0))
    {
        let game = Math.floor(Math.random()*2);
        if(game === 1){
            amount+=1;
            won++;
        }
        else{
            amount-=1;
            lose++;
        }

    }
    console.log("Number of times Won :",won);
    console.log("Number of times lost :",lose);
    console.log("Amount :",amount);

}
Gambling();
