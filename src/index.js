module.exports = function toReadable (number) {
        const str = String(number);
        const length = str.length;
      
        let res = '';
      
        let unitsToWord = '';
        const numToWord = (n) => {
          switch (n) {
            case 0: unitsToWord = 'zero';
              break;
            case 1: unitsToWord = 'one';
              break;
            case 2: unitsToWord = 'two';
              break;
            case 3: unitsToWord = 'three';
              break;
            case 4: unitsToWord = 'four';
              break;
            case 5: unitsToWord = 'five';
              break;
            case 6: unitsToWord = 'six';
              break;
            case 7: unitsToWord = 'seven';
              break;
            case 8: unitsToWord = 'eight';
              break;
            case 9: unitsToWord = 'nine';
              break;
            case 10: dozensToWord = 'ten';
              break;
            case 11: unitsToWord = 'eleven';
              break;
            case 12: unitsToWord = 'twelve';
              break;
            case 13: unitsToWord = 'thirteen';
              break;
            case 14: unitsToWord = 'fourteen';
              break;
            case 15: unitsToWord = 'fifteen';
              break;
            case 16: unitsToWord = 'sixteen';
              break;
            case 17: unitsToWord = 'seventeen';
              break;
            case 18: unitsToWord = 'eighteen';
              break;
            case 19: unitsToWord = 'nineteen';
              break;
            default: unitsToWord = '';
              break;
          }
          return unitsToWord;
        }
      
        let dozensToWord = '';
        const numToWordSec = (a) => {
          switch (a) {
            case 1: dozensToWord = 'ten';
              break;
            case 2: dozensToWord = 'twenty';
              break;
            case 3: dozensToWord = 'thirty';
              break;
            case 4: dozensToWord = 'forty';
              break;
            case 5: dozensToWord = 'fifty';
              break;
            case 6: dozensToWord = 'sixty';
              break;
            case 7: dozensToWord = 'seventy';
              break;
            case 8: dozensToWord = 'eighty';
              break;
            case 9: dozensToWord = 'ninety';
              break;
            default: unitsToWord = '';
              break;
          }
          return dozensToWord;
        }
      
        const figures = () => {
            if (length === 1) {
              res = numToWord(number);
              // console.log('1.res   ' + res)
              return res;
            }  else if (length === 2 && number > 20 && +str[length - 1] !== 0) {
              res = numToWordSec(+str[0]) + ' ' + numToWord(+str[1]);
              // console.log('3.res   ' + res)
              return res;
            } else if (length === 2 && number > 9 && +str[length - 1] === 0) {
              res = numToWordSec(+str[0]);
              // console.log('4.res   ' + res)
              return res;
            } else if(length === 2 && number > 9 && number < 20){
              res = numToWord(+str);
              // console.log('5.res   ' + res)
              return res;
            } else if (length === 3 && (number - (+str[0] * 100)) > 20 && +str[length - 1] !== 0) {
              res = numToWord(+str[0]) + ' ' + 'hundred' + ' ' + numToWordSec(+str[1]) + ' ' + numToWord(+str[2]);
              // console.log('6.res   ' + res)
              return res;
            } else if (length === 3 && (number - (+str[0] * 100)) < 20 && +str[length - 1] !== 0) {
              res = numToWord(+str[0]) + ' ' + 'hundred' + ' ' + numToWord(+str.slice(1,3)) ;
              // console.log('7.res   ' + res)
              return res;
            } else if (length === 3 && (number - (+str[0] * 100)) > 9 && +str[length - 1] === 0) {
              res = numToWord(+str[0]) + ' ' + 'hundred' + ' ' + numToWordSec(+str[1]) ;
              // console.log('8.res   ' + res)
              return res;
            } else if (length === 3 && (+str[length - 2] === 0 && +str[length - 1] === 0)) {
              res = numToWord(+str[0]) + ' ' + 'hundred';
              // console.log('9.res   ' + res)
              return res;
            } else if (length > 3) {
              return res = 'number more 999'
            }
          }
        figures(length);
        return res
    }
