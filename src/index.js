module.exports = function count(s, pairs) {
  // your implementation

var N = 1;
for (let i = 0; i < pairs.length; i++){
  var pow = (pairs[i][0] ** pairs[i][1]) 
  N = N * pow 
}
console.log(N)
if (N > 999){
  console.log("break!")
  return "break!"
}
//////////////////////

function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}

/////////////////////
var kArr = [];

for(let j = 0; j < s.length; j++){


  if(s[j] == '1'){
    console.log('1!');
    var kArrPre1 = [];
    for(let k = 0; k <= N; k++){
      let b = k + j
        if (b != 0 && gcd_rec(N, b) == 1){
            kArrPre1.push(k)
        }
    }
    kArr.push(kArrPre1);
    console.log(kArrPre1);
  }
  if(s[j] == '0') {
    console.log('0!');
    var kArrPre0 = [];
    for(let kk = 0; kk <= N; kk++){
      let c = kk + j
        if (c != 0 && gcd_rec(N, c) != 1){
            kArrPre0.push(kk)
        }
    }
    
    console.log(kArrPre0);
    kArr.push(kArrPre0);
    
  }
}


console.log(kArr);


}