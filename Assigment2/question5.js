
function convertFahrenheit(farenheit){
    let celcius = (farenheit -32) * 5 / 9;
    return celcius;
}
console.log(convertFahrenheit(32));
console.log(convertFahrenheit(0));
console.log(convertFahrenheit(212));
console.log(convertFahrenheit(100));
