function concatStrings(input, separator = '') {
    return function (args) {        
        const res = input + separator + args;
        const areArgsCorrect = typeof args === 'string';
        const isSepCorrect = typeof separator === 'string';

        if (!isSepCorrect) {
            separator = '';
        }

        if (!areArgsCorrect) {
            return input;
        }         

        return concatStrings(res, separator);
    }
}