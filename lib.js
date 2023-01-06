function userInfo(userId, title) {
    return `${userId} & ${title}`
};

// validateInput
const validateInput = function (value, required, isNumber) {
    if (!value) {
        return false;
    };
    if (required && value.toString().trim().length === 0) {
        return false;
    };
    if (isNumber && isNaN(+value)) {
        return false;
    };
    return true;
};

// generate final result
const generateResult = function (userid, title) {
    return `User ID: ${userid} created an article titled ${title}`;
};

// check and generate function
const checkAndGenerate = function (userId, title, article) {
    // check validation
    if (
        !validateInput(userId, true, true) ||
        !validateInput(title, true, false) ||
        !validateInput(article, true, false)
    ) {
        return false;
    }

    // generate output
    const resultText = generateResult(userId, title);
    return resultText;
}


module.exports = { userInfo, validateInput, checkAndGenerate };