// var timeout = setTimeout(function(str1,str2) {
//     console.log(str1 +" "+ str2)
// },1000,"Hello how are you Man");


printStatement = () => {
    console.log('Printed after 3 seconds');
}
setTimeout(printStatement, 3000);
console.log('Printed Immediately');