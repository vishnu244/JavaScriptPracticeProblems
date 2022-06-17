var a = [];
var maximum=100;
var minimum=999;
console.log("Five Random Numbers are :")
function randomNumber(min, max) {
    for(let i = 0;i<5;i++)
    {
        a[i] = Math.floor(Math.random() * (max - min)) + min;
        console.log(a[i]);
        if(a[i]>maximum)
        {
            maximum=a[i];
        }
        if(a[i]<minimum)
        {
            minimum=a[i];
        }
    }
  }
  randomNumber(100,999);
  console.log("Maximum of 5 random numbers :"+maximum);
  console.log("Minimum of 5 random numbers :"+minimum);