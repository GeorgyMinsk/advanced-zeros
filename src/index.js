module.exports = function getZerosCount(number, base) {
var nulli=0, kol, mnoj,base2=base;
var SimpleNumner =new Array ([2,0], [3,0], [5,0], [7,0], [11,0], [13,0], [17,0], [19,0], [23,0], [29,0], [31,0], [37,0], [41,0], 
    [43,0],[47,0], [53,0], [59,0], [61,0], [67,0], [71,0], [73,0], [79,0], [83,0], [89,0], [97,0],[ 101,0], [103,0], [107,0], 
    [109,0],[113,0], [127,0], [131,0], [137,0], [139,0], [149,0], [151,0], [157,0], [163,0], [167,0], [173,0], [179,0], [181,0],
     [191,0], [193,0], [197,0],[199,0],[211,0],[223,0],[227,0],[229,0],[233,0],[239,0],[241,0],[251,0]);
       for (let j = 0; j < SimpleNumner.length; j++) {
         if (base2%(SimpleNumner[j][0])==0) {
          base2/=SimpleNumner[j][0];
          SimpleNumner[j][1]++;
          j--;
         }
       } 

     for (let i = SimpleNumner.length-1; i >=0; i--) {
       if (SimpleNumner[i][1]!=0) {
        kol=SimpleNumner[i][1];
        mnoj=SimpleNumner[i][0];
        break;
       }
       
     }
 for (let index = 1; index < number; index++) ;
    for (let index = 1; index < number; index++) {
      if (Math.pow(mnoj,index)<=number) {
        nulli+=Math.floor(number/Math.pow(mnoj,index))
      } 
        else {
          break;
        }
    }

      return Math.floor(nulli/kol);
  }


// function SimpleNumnerArry() {
//   var mass=[];
//   for (let i = 2; i < 252; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i%j==0) {
//         mass.push[i,0]
//       }
//     }
//   }
  
// }