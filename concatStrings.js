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