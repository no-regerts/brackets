const check = function (str, bracketsConfig) {
    // Preparing data.
    const openingBrackets = [];
    const closingBrackets = [];
    const monomorphicBrackets = [];

    bracketsConfig.forEach((pair) => {
        if (pair[0] === pair[1])
            monomorphicBrackets.push(pair[0]);
        else {
            openingBrackets.push(pair[0]);
            closingBrackets.push(pair[1]);
        }
    });

    // Main algorithm.
    const stack = [str[0]];

    for (let i = 1; i < str.length; i++) {
        // Paired opening bracket.
        if (openingBrackets.includes(str[i])) stack.push(str[i]);

        // Paired closing bracket.
        if (closingBrackets.includes(str[i])) {
            const pairIndex = closingBrackets.indexOf(str[i]);
            if (stack[stack.length - 1] === openingBrackets[pairIndex])
                stack.pop();
            else stack.push(str[i]);
        }

        // Monomkorphic bracket.
        if (monomorphicBrackets.includes(str[i]))
            if (stack[stack.length - 1] === str[i]) stack.pop();
            else stack.push(str[i]);
    }

    return stack.length ? false : true;
};

module.exports = check;
