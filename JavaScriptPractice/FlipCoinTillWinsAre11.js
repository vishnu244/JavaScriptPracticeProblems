var Head =0;
var Tail=0;
while((Head < 11) && (Tail < 11))
{
    let flip = Math.floor(Math.random()*2);
    if(flip == 0){
        console.log("Tail");
        Tail++;
    }
    else
    {
        console.log("Head");
        Head++;
    }
}
console.log("Head Count :",Head);
console.log("Tail Count :",Tail);
