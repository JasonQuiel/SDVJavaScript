//function sumOfOdds(x) {
//    let sum = 0;
//    for (let i = 0; i <= x; i++) {
//       if(i%2 !== 0){
//           sum = sum + i;
//       }
//   }
//   return sum;
//}
//console.log(sumOfOdds(5))

function sumOfOdds(x) {
    let result = []
    let sum = 0
    for (let i = 0; i <= x; i++) {
        if(i%2 !== 0){ 
            console.log(i)    
            sum = sum + i 
            
        }
    }  
return result.push(sum)    
}
console.log(sumOfOdds(5))
