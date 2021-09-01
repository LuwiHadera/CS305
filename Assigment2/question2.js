
function compoundInterest(intitial,rate,time){
    let CI = intitial * (1 +(rate / 100)/12)**(12 * time);
        return CI;

}
console.log(compoundInterest(100,10,1));