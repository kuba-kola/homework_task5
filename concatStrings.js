function concatStrings(input, separator = '') {
    return function (args) {        
        const res = input + separator + args;
        const argsCorrect = typeof args === 'string';
        const sepCorrect = typeof separator === 'string';
        
        if (!sepCorrect) {
            separator = '';
        }

        if (!argsCorrect) {
            return input;
        }         
  
        return concatStrings(res, separator);
    }
}

console.log(concatStrings('first')('second')('third')());
// 'firstsecondthird'
console.log(concatStrings('first', null)('second')())
//'firstsecond'
console.log(concatStrings('first', '123')('second')('third')())
//'first123second123third'
console.log(concatStrings('some-value')('')('')(null))
//'some-value'
console.log(concatStrings('some-value')(2))
//'some-value'
console.log(concatStrings('some-value')('333')(123n))
//'some-val333'

